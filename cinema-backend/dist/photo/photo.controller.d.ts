import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';
import { photo_add_dto } from './dto/photo.dto';
export declare class PhotoController {
    private readonly photoService;
    constructor(photoService: PhotoService);
    findAll(): Promise<Photo[]>;
    addPhoto(photo_add_dto: photo_add_dto): Promise<Photo>;
}
