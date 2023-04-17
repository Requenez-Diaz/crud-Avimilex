import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoreDto } from './dto/create-store.dto';
import { Store } from './entities/store.entities';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
  ) {}

  async create(createStoreDto: CreateStoreDto) {
    const store = await this.storeRepository.create(createStoreDto);
    await this.storeRepository.save(store);

    return store;
  }

  findAll() {
    return this.storeRepository.find();
  }

  findOne(id: string) {
    return this.storeRepository.findOneBy({ id });
  }

  async update(id: string, updateStoreDto: CreateStoreDto) {
    const findStore = await this.findOne(id);
    const updatedStore = await this.storeRepository.merge(
      findStore,
      updateStoreDto,
    );
    return this.storeRepository.save(updatedStore);
  }

  async remove(id: string) {
    const store = await this.findOne(id);
    await this.storeRepository.remove(store);
    return 'Food is removed successfully';
  }
}
