import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './schemas/category.schema';
import { Model, Types } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Product } from '../products/schemas/product.schema';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    // Check if category name exists
    const existingCategory = await this.categoryModel.findOne({
      name: createCategoryDto.name,
    });

    if (existingCategory) {
      throw new BadRequestException('Category with this name already exists');
    }

    // Create the new category
    const newCategory = new this.categoryModel({
      ...createCategoryDto,
      parent: createCategoryDto.parentCategoryId
        ? new Types.ObjectId(createCategoryDto.parentCategoryId)
        : null,
    });

    // Save and return the created category
    return newCategory.save();
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid category ID');
    }

    const existingCategory = await this.categoryModel.findById(id);
    if (!existingCategory) {
      throw new NotFoundException('Category not found');
    }

    if (updateCategoryDto.name) {
      const duplicate = await this.categoryModel.findOne({
        name: updateCategoryDto.name,
        _id: { $ne: id },
      });
      if (duplicate) {
        throw new BadRequestException('Category with this name already exists');
      }
    }

    // if (
    //   updateCategoryDto.parentCategoryId &&
    //   updateCategoryDto.parentCategoryId !== id
    // ) {
    //   existingCategory.parentCategoryId = new Types.ObjectId(
    //     updateCategoryDto.parentCategoryId,
    //   );
    // } else {
    //   updateCategoryDto.parentCategoryId = null;
    // }

    Object.assign(existingCategory, updateCategoryDto);
    return existingCategory.save();
  }

  async getById(categoryId: string): Promise<Category> {
    if (!Types.ObjectId.isValid(categoryId)) {
      throw new BadRequestException('Invalid category ID');
    }

    const category = await this.categoryModel
      .findById(categoryId)
      .populate('parent')
      .exec();
    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return category;
  }

  async delete(categoryId: string): Promise<void> {
    if (!Types.ObjectId.isValid(categoryId)) {
      throw new BadRequestException('Invalid category ID');
    }

    const category = await this.categoryModel.findById(categoryId);
    if (!category) {
      throw new NotFoundException('Category not found');
    }

    const isAssignedToProducts = await this.productModel.exists({
      category: categoryId,
    });
    if (isAssignedToProducts) {
      throw new BadRequestException(
        'Cannot delete category assigned to products',
      );
    }

    await this.categoryModel.findByIdAndDelete(categoryId);
  }
}
