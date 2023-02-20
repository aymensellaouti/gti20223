import { InjectionToken } from "@angular/core";
import { LoggerService } from "../services/logger.service";

export const LOGGER_PROVIDER_TOKEN = new InjectionToken<LoggerService>('LOGGER_PROVIDER_TOKEN')
