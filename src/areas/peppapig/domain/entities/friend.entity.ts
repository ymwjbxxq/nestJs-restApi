import {Transform} from 'class-transformer';
import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";

@Entity()
export class Friend {
  @ObjectIdColumn() 
  //@Transform((id: ObjectID) => id.toHexString(), {toPlainOnly: true})
  id: ObjectID;

  @Column()
  name: string;
}