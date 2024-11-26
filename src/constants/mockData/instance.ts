import { InstanceListResponse } from "@/type/response/_instance";
import { SimulationType } from "@/type/response/_simulation";
import { TemplateListResponse } from "@/type/response/_template";

const MOCK_SIMULATION_LIST: SimulationType[] = [
  {
    simulationId: 1,
    simulationName: "simulation 1",
    simulationDescription: "Description for simulation 1",
    simulationCreatedAt: "2023-01-15",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 2,
    simulationName: "simulation 2",
    simulationDescription: "Description for simulation 2",
    simulationCreatedAt: "2023-02-20",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 3,
    simulationName: "simulation 3",
    simulationDescription: "Description for simulation 3",
    simulationCreatedAt: "2023-03-10",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 4,
    simulationName: "simulation 4",
    simulationDescription: "Description for simulation 4",
    simulationCreatedAt: "2023-04-05",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 5,
    simulationName: "simulation 5",
    simulationDescription: "Description for simulation 5",
    simulationCreatedAt: "2023-05-17",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 6,
    simulationName: "simulation 6",
    simulationDescription: "Description for simulation 6",
    simulationCreatedAt: "2023-06-02",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 7,
    simulationName: "simulation 7",
    simulationDescription: "Description for simulation 7",
    simulationCreatedAt: "2023-07-21",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 8,
    simulationName: "simulation 8",
    simulationDescription: "Description for simulation 8",
    simulationCreatedAt: "2023-08-13",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 9,
    simulationName: "simulation 9",
    simulationDescription: "Description for simulation 9",
    simulationCreatedAt: "2023-09-10",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 10,
    simulationName: "simulation 10",
    simulationDescription: "Description for simulation 10",
    simulationCreatedAt: "2023-10-01",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 11,
    simulationName: "simulation 11",
    simulationDescription: "Description for simulation 11",
    simulationCreatedAt: "2023-11-05",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 12,
    simulationName: "simulation 12",
    simulationDescription: "Description for simulation 12",
    simulationCreatedAt: "2023-12-15",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 13,
    simulationName: "simulation 13",
    simulationDescription: "Description for simulation 13",
    simulationCreatedAt: "2024-01-20",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 14,
    simulationName: "simulation 14",
    simulationDescription: "Description for simulation 14",
    simulationCreatedAt: "2024-02-11",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 15,
    simulationName: "simulation 15",
    simulationDescription: "Description for simulation 15",
    simulationCreatedAt: "2024-03-17",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 16,
    simulationName: "simulation 16",
    simulationDescription: "Description for simulation 16",
    simulationCreatedAt: "2024-04-22",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 17,
    simulationName: "simulation 17",
    simulationDescription: "Description for simulation 17",
    simulationCreatedAt: "2024-05-08",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 18,
    simulationName: "simulation 18",
    simulationDescription: "Description for simulation 18",
    simulationCreatedAt: "2024-06-05",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 19,
    simulationName: "simulation 19",
    simulationDescription: "Description for simulation 19",
    simulationCreatedAt: "2024-07-10",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 20,
    simulationName: "simulation 20",
    simulationDescription: "Description for simulation 20",
    simulationCreatedAt: "2024-08-25",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 21,
    simulationName: "simulation 21",
    simulationDescription: "Description for simulation 21",
    simulationCreatedAt: "2024-09-15",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 22,
    simulationName: "simulation 22",
    simulationDescription: "Description for simulation 22",
    simulationCreatedAt: "2024-10-02",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 23,
    simulationName: "simulation 23",
    simulationDescription: "Description for simulation 23",
    simulationCreatedAt: "2024-11-12",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 24,
    simulationName: "simulation 24",
    simulationDescription: "Description for simulation 24",
    simulationCreatedAt: "2024-12-30",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 25,
    simulationName: "simulation 25",
    simulationDescription: "Description for simulation 25",
    simulationCreatedAt: "2025-01-08",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 26,
    simulationName: "simulation 26",
    simulationDescription: "Description for simulation 26",
    simulationCreatedAt: "2025-02-22",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 27,
    simulationName: "simulation 27",
    simulationDescription: "Description for simulation 27",
    simulationCreatedAt: "2025-03-13",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 28,
    simulationName: "simulation 28",
    simulationDescription: "Description for simulation 28",
    simulationCreatedAt: "2025-04-09",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 29,
    simulationName: "simulation 29",
    simulationDescription: "Description for simulation 29",
    simulationCreatedAt: "2025-05-18",
    simulationStatus: "RUNNING",
  },
  {
    simulationId: 30,
    simulationName: "simulation 30",
    simulationDescription: "Description for simulation 30",
    simulationCreatedAt: "2025-06-15",
    simulationStatus: "RUNNING",
  },
];

const MOCK_INSTANCE_LIST: InstanceListResponse = [
  {
    instanceId: 0,
    instanceName: "instance1",
    instanceDescription: "description1",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 1,
    instanceName: "instance2",
    instanceDescription: "description2",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 2,
    instanceName: "instance3",
    instanceDescription: "description3",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 3,
    instanceName: "instance4",
    instanceDescription: "description4",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 4,
    instanceName: "instance5",
    instanceDescription: "description5",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 5,
    instanceName: "instance6",
    instanceDescription: "description6",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 6,
    instanceName: "instance7",
    instanceDescription: "description7",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 7,
    instanceName: "instance8",
    instanceDescription: "description8",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 8,
    instanceName: "instance9",
    instanceDescription: "description9",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 9,
    instanceName: "instance10",
    instanceDescription: "description10",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 10,
    instanceName: "instance11",
    instanceDescription: "description11",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 11,
    instanceName: "instance12",
    instanceDescription: "description12",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 12,
    instanceName: "instance13",
    instanceDescription: "description13",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 13,
    instanceName: "instance14",
    instanceDescription: "description14",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 14,
    instanceName: "instance15",
    instanceDescription: "description15",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 15,
    instanceName: "instance16",
    instanceDescription: "description16",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 16,
    instanceName: "instance17",
    instanceDescription: "description17",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 17,
    instanceName: "instance18",
    instanceDescription: "description18",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 18,
    instanceName: "instance19",
    instanceDescription: "description19",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 19,
    instanceName: "instance20",
    instanceDescription: "description20",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 20,
    instanceName: "instance21",
    instanceDescription: "description21",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 21,
    instanceName: "instance22",
    instanceDescription: "description22",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 22,
    instanceName: "instance23",
    instanceDescription: "description23",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 23,
    instanceName: "instance24",
    instanceDescription: "description24",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 24,
    instanceName: "instance25",
    instanceDescription: "description25",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 25,
    instanceName: "instance26",
    instanceDescription: "description26",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 26,
    instanceName: "instance27",
    instanceDescription: "description27",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 27,
    instanceName: "instance28",
    instanceDescription: "description28",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 28,
    instanceName: "instance29",
    instanceDescription: "description29",
    instanceCreatedAt: "2024-11-22",
  },
  {
    instanceId: 29,
    instanceName: "instance30",
    instanceDescription: "description30",
    instanceCreatedAt: "2024-11-22",
  },
];

const MOCK_TEMPLATE_LIST: TemplateListResponse = [
  {
    templateId: 1,
    templateType: "String",
    templateDescription: "Description for template 1",
  },
  {
    templateId: 2,
    templateType: "Number",
    templateDescription: "Description for template 2",
  },
  {
    templateId: 3,
    templateType: "Boolean",
    templateDescription: "Description for template 3",
  },
  {
    templateId: 4,
    templateType: "String",
    templateDescription: "Description for template 4",
  },
  {
    templateId: 5,
    templateType: "Date",
    templateDescription: "Description for template 5",
  },
  {
    templateId: 6,
    templateType: "String",
    templateDescription: "Description for template 6",
  },
  {
    templateId: 7,
    templateType: "Number",
    templateDescription: "Description for template 7",
  },
  {
    templateId: 8,
    templateType: "Boolean",
    templateDescription: "Description for template 8",
  },
  {
    templateId: 9,
    templateType: "String",
    templateDescription: "Description for template 9",
  },
  {
    templateId: 10,
    templateType: "Date",
    templateDescription: "Description for template 10",
  },
  {
    templateId: 11,
    templateType: "String",
    templateDescription: "Description for template 11",
  },
  {
    templateId: 12,
    templateType: "Number",
    templateDescription: "Description for template 12",
  },
  {
    templateId: 13,
    templateType: "Boolean",
    templateDescription: "Description for template 13",
  },
  {
    templateId: 14,
    templateType: "String",
    templateDescription: "Description for template 14",
  },
  {
    templateId: 15,
    templateType: "Date",
    templateDescription: "Description for template 15",
  },
  {
    templateId: 16,
    templateType: "String",
    templateDescription: "Description for template 16",
  },
  {
    templateId: 17,
    templateType: "Number",
    templateDescription: "Description for template 17",
  },
  {
    templateId: 18,
    templateType: "Boolean",
    templateDescription: "Description for template 18",
  },
  {
    templateId: 19,
    templateType: "String",
    templateDescription: "Description for template 19",
  },
  {
    templateId: 20,
    templateType: "Date",
    templateDescription: "Description for template 20",
  },
  {
    templateId: 21,
    templateType: "String",
    templateDescription: "Description for template 21",
  },
  {
    templateId: 22,
    templateType: "Number",
    templateDescription: "Description for template 22",
  },
  {
    templateId: 23,
    templateType: "Boolean",
    templateDescription: "Description for template 23",
  },
  {
    templateId: 24,
    templateType: "String",
    templateDescription: "Description for template 24",
  },
  {
    templateId: 25,
    templateType: "Date",
    templateDescription: "Description for template 25",
  },
  {
    templateId: 26,
    templateType: "String",
    templateDescription: "Description for template 26",
  },
  {
    templateId: 27,
    templateType: "Number",
    templateDescription: "Description for template 27",
  },
  {
    templateId: 28,
    templateType: "Boolean",
    templateDescription: "Description for template 28",
  },
  {
    templateId: 29,
    templateType: "String",
    templateDescription: "Description for template 29",
  },
  {
    templateId: 30,
    templateType: "Date",
    templateDescription: "Description for template 30",
  },
];

const MOCK_OPTION_LIST = [
  { label: "ID", value: "simulationId" },
  { label: "설명", value: "simulationDescription" },
  { label: "이름", value: "simulationName" },
  { label: "생성일", value: "simulationCreatedAt" },
  { label: "ID1", value: "id1" },
  { label: "설명", value: "description1" },
  { label: "이름", value: "name1" },
  { label: "생성일", value: "createdAt1" },
  { label: "ID", value: "id2" },
  { label: "설명", value: "description2" },
  { label: "이름", value: "name2" },
  { label: "생성일", value: "createdAt2" },
];
export {
  MOCK_SIMULATION_LIST,
  MOCK_INSTANCE_LIST,
  MOCK_TEMPLATE_LIST,
  MOCK_OPTION_LIST,
};