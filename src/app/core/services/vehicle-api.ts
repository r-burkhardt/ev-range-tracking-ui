import { Injectable } from '@angular/core';
import {Api} from '@app/core/services/api';
import {Vehicle} from '@app/core/models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleApi {

  private readonly baseUri = '';

  constructor(private apiAccess: Api) { }

  async getVehicle(vehicleId: string): Promise<Vehicle> {
    return new Vehicle();
  }

  async postVehicle(vehicle: Vehicle): Promise<string> {
    return '';
  }

  async putVehicle(vehicle: Vehicle): Promise<boolean> {
    return false;
  }

  async deleteVehicle(vehicleId: string): Promise<boolean> {
    return false;
  }
}
