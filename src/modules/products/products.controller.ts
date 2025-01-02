import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { PaginationQueryDto } from '@app/utils/paging/pagination-query.dto';
import { PaginatedResponseDto } from '@app/utils/paging/paginated-response.dto';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  // GET: Example: /products?sorts=price,-createdAt&filters=price>100,stock>=10&search=name@=laptop&page=1&pageSize=10
  @Get()
  async getProducts(
    @Query() query: PaginationQueryDto,
  ): Promise<PaginatedResponseDto<Product>> {
    return this.productService.listAll(query);
  }
}
