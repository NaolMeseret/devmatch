import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateProfileDto } from './dto/create.profile.dto';
@Controller('profiles')
export class ProfilesController {
  // GET/profiles
  @Get()
  findAll(@Query('location') location: number) {
    return [{ location }];
  }

  // GET/profiles/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
  @Post()
  create(@Body() CreateProfileDto: CreateProfileDto) {
    return {
      name: CreateProfileDto.name,
      description: CreateProfileDto.description,
    };
  }
  // POST/profiles
  // PUT/profiles/:id
  // DELETE/profiles/:id
}
