import { LoggerService } from '../services/logger.service';
export const loggerServiceProviderFactory = () => {
  return new LoggerService();
};
