import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model, Types } from 'mongoose';
import { Category } from '../categories/schemas/category.schema';
import { PaginationQueryDto } from '@app/utils/paging/pagination-query.dto';
import { PaginatedResponseDto } from '@app/utils/paging/paginated-response.dto';
import { PaginationQueryParser } from '@app/utils/paging/pagination-query-parser.util';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async listAll(
    queryDto: PaginationQueryDto,
  ): Promise<PaginatedResponseDto<Product>> {
    const { filters, sorts, page, pageSize } = queryDto;

    const filterObj = PaginationQueryParser.parseFilters(filters);
    const sortObj = PaginationQueryParser.parseSorts(sorts);

    // Add search to filters if provided
    // if (search) {
    //   const [field, value] = search.split('@=');
    //   if (field && value) {
    //     filterObj[field] = { $regex: value, $options: 'i' }; // Case-insensitive search
    //   }
    // }

    const totalCount = await this.productModel.countDocuments(filterObj).exec();
    const data = await this.productModel
      .find(filterObj)
      .sort(sortObj)
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .exec();

    const totalPages = Math.ceil(totalCount / pageSize);

    return {
      data,
      totalCount,
      page,
      pageSize,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
      filters,
      sorts,
    };
  }

  async create(createData: CreateProductDto): Promise<Product> {
    const { categoryIds, ...rest } = createData;

    // Ensure unique SKU
    const existingProduct = await this.productModel
      .findOne({ sku: createData.sku })
      .exec();
    if (existingProduct) {
      throw new BadRequestException('SKU must be unique');
    }

    const validCategories = await this.getValidatedCategories(categoryIds);

    const newProduct = new this.productModel({
      ...rest,
      categories: validCategories,
    });

    return newProduct.save();
  }

  async update(id: string, updateData: UpdateProductDto): Promise<Product> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid product ID');
    }

    const existingProduct = await this.productModel.findById(id);
    if (!existingProduct) {
      throw new NotFoundException('Product not found');
    }

    // Extract category IDs if present
    const { categoryIds, ...rest } = updateData;
    const validCategories = await this.getValidatedCategories(categoryIds);

    const updatePayload = {
      ...rest,
      ...validCategories,
    };

    // Update the product and return the updated document
    const updatedProduct = await this.productModel
      .findByIdAndUpdate(id, updatePayload, { new: true })
      .exec();

    if (!updatedProduct) {
      throw new NotFoundException('Failed to update product');
    }

    return updatedProduct;
  }

  private getValidatedCategories = async (
    categoryIds: string[],
  ): Promise<Types.ObjectId[]> => {
    if (categoryIds && categoryIds.length > 0) {
      const categories = await this.categoryModel
        .find({ _id: { $in: categoryIds } })
        .select('_id')
        .exec();

      if (categories.length !== categoryIds.length) {
        throw new BadRequestException('Some category IDs are invalid');
      }

      return categories.map((cat) => cat._id as Types.ObjectId);
    }

    return [];
  };
}
