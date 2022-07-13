import { IsEmail, IsString, MinLength } from 'class-validator';
import { LoginRequest, RegisterRequest } from '../auth.pb';

export class RegisterDto implements RegisterRequest {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class LoginDto implements LoginRequest {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}

export class ValidateRequestDto implements ValidateRequestDto {
  @IsString()
  public readonly token: string;
}
