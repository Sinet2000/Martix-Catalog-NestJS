import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum CommunicationType {
  PERSONAL = 'personal',
  WORK = 'work',
}

@Schema()
export class Communication {
  @Prop([
    {
      type: {
        type: String,
        enum: CommunicationType,
        required: true,
      },
      number: {
        type: String,
        required: true,
      },
    },
  ])
  mobiles: Array<{
    type: CommunicationType; // Mobile type: personal, work
    number: string; // Mobile number
  }>;

  @Prop([
    {
      type: {
        type: String,
        enum: CommunicationType,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
    },
  ])
  emails: Array<{
    type: CommunicationType; // Email type: personal, work
    email: string; // Email address
  }>;
}

export const CommunicationSchema = SchemaFactory.createForClass(Communication);
