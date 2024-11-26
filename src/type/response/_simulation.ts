import { BaseSimulation, SimulationIdField } from "@/type/_field";

// 타입 추후 추가 예정
type SimulationStatusType = "RUNNING";

export interface SimulationType extends BaseSimulation {
  simulationStatus: SimulationStatusType;
  [key: string]: string | number;
}

export type SimulationListResponse = SimulationType[];

export interface SimulationPostResponse extends BaseSimulation {}

export interface SimulationActionResponse extends SimulationIdField {
  result: string;
}