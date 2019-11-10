import { Injectable } from '@angular/core';
import {ChargingSession} from '@app/core/models/charging-session';
import {Api} from '@app/core/services/api';
import {VehicleApi} from '@app/core/services/vehicle-api';


@Injectable({
  providedIn: 'root'
})
export class ChargeSessionApi {

  private readonly baseUri = '';

  constructor(private apiAccess: Api, private vehicleApi: VehicleApi) { }

  async getChargingSessionByID(sessionId: string): Promise<ChargingSession> {
    return new ChargingSession();
  }

  async getAllChargingSessionsForVehicle(carId: string): Promise<ChargingSession[]> {
    const CSArray: ChargingSession[] = [];
    return CSArray;
  }

  async getChargingSessionsForDateRangeVehicle(carId: string, startDate: Date, endDate?: Date): Promise<ChargingSession[]> {
    const CSArray: ChargingSession[] = [];
    return CSArray;
  }

  // TODO() update vehicle current odometer
  async postChargingSession(session: ChargingSession): Promise<string> {
    return '';
  }

  async putChargingSession(session: ChargingSession): Promise<boolean> {
    return false;
  }

  async deleteChargingSession(sessionId: string): Promise<boolean> {
    return false;
  }
}
