import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDetailsModule } from './product-detail/product-details.module';
import { UserModule } from './user/user.module';
import { PhotoModule } from './photo/photo.module';
import { QuestionModule } from './question/question.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: null,
      database: 'nest-products-db',
      autoLoadEntities: true,
      synchronize: true,
      retryAttempts: 2,
    }),
    ProductsModule,
    ProductDetailsModule,
    UserModule,
    PhotoModule,
    QuestionModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(LoggerMiddleware)
  //     .exclude({ path: 'products/find/all', method: RequestMethod.GET })
  //     .forRoutes(ProductsController);
  // }
}
