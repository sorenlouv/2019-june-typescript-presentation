import { idx } from '../helpers/idx';

interface APIResponse {
  user?: {
    address?: {
      work?: {
        email?: {
          primary: string;
        };
      };
    };
  };
}

function getPrimaryEmail(res: APIResponse) {
  const primaryEmail = idx(res, _ => _.user.address.work.email.primary);
  return primaryEmail;
}
