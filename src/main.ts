import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ALLOWED_ORIGINS, PORT } from './common/constants/app.constants';

export async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Enable CORS for specified origins
    app.enableCors({
        origin: ALLOWED_ORIGINS,
    });

    // Use global validation pipe for DTO validation
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

    await app.listen(PORT);
    console.log(`Doot Chat API running on http://localhost:${PORT}/graphql`);
}
bootstrap();