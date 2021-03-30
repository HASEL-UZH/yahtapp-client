import SERVICE from '@/constants/ServiceIdentifiers';
import { AuthService } from '@/core/auth/AuthService';
import { HttpService } from '@/infrastructure/http/HttpService';
import store from '@/store';
import { inject, injectable } from 'inversify';

@injectable()
export class JwtAuthService implements AuthService {
  constructor(
    @inject(SERVICE.HTTP)
    private readonly httpService: HttpService
  ) {}

  async login(username: string, password: string): Promise<unknown> {
    console.log('login', username, password);

    console.log(Notification.permission);
    console.log(store.state.authStore.isLoggedIn);

    try {
      /*
      const response = await this.httpService.post('/auth/login', {
        username,
        password,
      });
      const user = jwtDecode(response.data.token);
      */

      const user = { username: 'User Name' };
      console.debug(user);
    } catch (e) {
      console.error(e);
      throw e;
    }

    return Promise.resolve(undefined);
  }

  logout(): Promise<unknown> {
    console.log('logout');
    return Promise.resolve(undefined);
  }
}