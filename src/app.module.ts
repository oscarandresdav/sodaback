import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { PricesModule } from './prices/prices.module';
import { BrandsModule } from './brands/brands.module';
import { TypeProductsModule } from './typeProducts/typeProducts.module';
import { IvaRatesModule } from './ivarates/ivaRates.module';
import { IceRatesModule } from './icerates/IceRates.module';
import { UnitMeasurementsModule } from './unitMeasurement/unitMeasurements.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DATABASE_HOST: Joi.required(),
        DATABASE_PORT: Joi.number().default(3306),
      }),
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql', // type of our database
        host: process.env.DATABASE_HOST, // database host
        port: +process.env.DATABASE_PORT, // database host
        username: process.env.DATABASE_USER, // username
        password: process.env.DATABASE_PASSWORD, // user password
        database: process.env.DATABASE_NAME, // name of our database,
        autoLoadEntities: true, // models will be loaded automatically
        synchronize: true, // your entities will be synced with the database(recommended: disable in prod)
      }),
    }),
    CategoriesModule,
    ProductsModule,
    PricesModule,
    BrandsModule,
    TypeProductsModule,
    IvaRatesModule,
    IceRatesModule,
    UnitMeasurementsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
