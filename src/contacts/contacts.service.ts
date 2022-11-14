import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Contact } from './entities/contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.contactRepository.find({
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string) {
    const contact = await this.contactRepository.findOne({
      where: { id: id },
    });
    if (!contact) {
      throw new NotFoundException(`Contact with id=>{${id}} not found`);
    }
    return contact;
  }

  async findByName(name: string) {
    console.log(name);
    const contact = await this.contactRepository.findBy({
      name: Like(`%${name}%`),
    });
    if (!contact || contact.length === 0) {
      throw new NotFoundException(`Contact findbyname #${name} not found`);
    }
    return contact;
  }

  create(createContactDto: CreateContactDto) {
    const contact = this.contactRepository.create(createContactDto);
    return this.contactRepository.save(contact);
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const contact = await this.contactRepository.preload({
      id: id,
      ...updateContactDto,
    });
    if (!contact) {
      throw new NotFoundException(`Contact with id=>{${id}} not found`);
    }
    return this.contactRepository.save(contact);
  }

  async remove(id: string) {
    const contact = await this.findOne(id);
    return this.contactRepository.remove(contact);
  }
}
