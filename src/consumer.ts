import amqp from 'amqplib';
import { CertifyDocumentUseCase } from './use-cases/CertifyDocumentUseCase';
import CertifyDocumentModel from './models/CertifyDocumentModel';
import 'dotenv/config'

async function consumer(){
  const conn = await amqp.connect({
    hostname: process.env.RABBITMQ_HOST,
    port: Number(process.env.RABBITMQ_PORT),
    username: process.env.RABBITMQ_USER,
    password: process.env.RABBITMQ_PASS
  })
  
  const channel = await conn.createChannel()

  await channel.prefetch(5)

  channel.consume('certify_document', async (data) => {
    const message = JSON.parse(data.content.toString())

    try {
      const documentDetails = await CertifyDocumentModel.getDetailsById(message.id)
      await CertifyDocumentUseCase(Buffer.from(documentDetails.file, "base64"));
      await CertifyDocumentModel.setProcessed(message.id);

    } catch (err: any) {
      await CertifyDocumentModel.setErrored(message.id, err.message);
    }

    channel.ack(data)

  })

}

consumer()