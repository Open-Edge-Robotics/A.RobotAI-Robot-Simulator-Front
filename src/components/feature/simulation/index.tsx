"use client";

import React from "react";
import { useForm } from "react-hook-form";
import PageTitle from "@/components/common/PageTitle";
import FilterGroup, {
  FilterGroupFormData,
} from "@/components/shared/FilterGroup";
import { SIMULATION_LIST_COLUMN_LIST } from "@/constants/_tableColumn";
import { MOCK_SIMULATION_LIST } from "@/constants/mockData/instance";
import { MENU_ITEMS } from "@/constants/_navbar";
import {
  createSimulationShema,
  filterShema,
  SCHEMA_NAME,
} from "@/schema/_schema";
import { filterSimulationList } from "@/utils/table";
import { zodResolver } from "@hookform/resolvers/zod";
import { Typography } from "@mui/material";
import SimulationListTable from "@/components/shared/SimulationListTable";
import CreateButton from "@/components/shared/CreateButton";
import SimulationCreateDialog from "@/components/shared/SimulationCreateDialog";
import { CreateSimulationFormType } from "@/type/_simulation";
import { SimulationType } from "@/type/response/_simulation";
import { SIMULATION_OPTION_LIST } from "@/constants/_filterOption";
import { usePostSimulation } from "@/hooks/simulation/usePostSimulation";
import { Result } from "@/type/response/_default";
import { useToastStore } from "@/stores/useToastStore";

const paginationModel = { page: 0, pageSize: 10 };

const Simulation = () => {
  const [filterType, setFilterType] = React.useState<string>(
    SIMULATION_OPTION_LIST[0].value,
  );
  // TODO: 렌더링 시 시뮬레이션 리스트 받아서 초기값으로 넣기
  const [simulationList, setSimulationList] =
    React.useState<SimulationType[]>(MOCK_SIMULATION_LIST);
  const [hasResult, setHasResult] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const showToast = useToastStore((state) => state.showToast);

  const handleSelectFilter = (value: string) => {
    setFilterType(value);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
    dialogReset();
  };

  // TODO: API 연결
  const handleExecute = (id: string) => {
    console.log("실행버튼 클릭", id);
  };
  const handleClickStop = (id: string) => {
    console.log("중지 버튼 클릭", id);
  };
  const handleClickDelete = (id: string) => {
    console.log("삭제 버튼 클릭", id);
  };

  const handleClickCreate = () => {
    setIsOpen(true);
  };

  const { register: filterRegister, handleSubmit: filterHandleSubmit } =
    useForm<FilterGroupFormData>({
      resolver: zodResolver(filterShema),
      mode: "onChange",
    });

  const {
    register: dialogRegister,
    handleSubmit: dialogHandleSubmit,
    formState: { errors },
    reset: dialogReset,
  } = useForm<CreateSimulationFormType>({
    resolver: zodResolver(createSimulationShema),
    mode: "onChange",
  });

  const onFilterSubmit = (data: FilterGroupFormData) => {
    const filteredList = filterSimulationList(
      MOCK_SIMULATION_LIST,
      SIMULATION_OPTION_LIST,
      data[SCHEMA_NAME.SEARCH_KEYWORD as keyof FilterGroupFormData],
      filterType,
    );

    if (filteredList.length <= 0) {
      setHasResult(false);
    } else {
      setHasResult(true);
      setSimulationList(filteredList as SimulationType[]);
    }
  };

  // form 스키마 통과 못했을 때 -> 검색어 X
  const onFilterError = () => {
    setHasResult(true);
    setSimulationList(MOCK_SIMULATION_LIST);
  };

  const { mutate: simulationCreateMutate, error: simulationCreateError } =
    usePostSimulation();
  // TODO: API 연결
  const onSimulationSubmit = (data: CreateSimulationFormType) => {
    simulationCreateMutate(
      {
        simulationName: data.simulationName,
        simulationDescription: data.simulationDescription,
      },
      {
        onSuccess: ({ message }: Result<null>) => {
          showToast(message, "success", 2000);
          setIsOpen(false);
        },
      },
    );
    dialogReset();
  };

  return (
    <div className="flex flex-col gap-4">
      <PageTitle className="text-white">{MENU_ITEMS[3].label}</PageTitle>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <CreateButton onClick={handleClickCreate} />
          <FilterGroup
            optionList={SIMULATION_OPTION_LIST}
            filterType={filterType}
            onSelect={handleSelectFilter}
            register={filterRegister}
            handleSubmit={filterHandleSubmit(onFilterSubmit, onFilterError)}
          />
        </div>
        {hasResult && (
          <SimulationListTable
            rows={simulationList}
            columns={SIMULATION_LIST_COLUMN_LIST}
            paginationModel={paginationModel}
            onExecute={handleExecute}
            onStop={handleClickStop}
            onDelete={handleClickDelete}
          />
        )}
        {!hasResult && (
          <div className="flex h-80 w-full justify-center rounded-[4px] bg-white p-2">
            <div className="self-center">
              <Typography
                variant="h6"
                className="text-sm font-normal text-gray-900"
              >
                검색 결과가 없습니다.
              </Typography>
            </div>
          </div>
        )}
      </div>
      <SimulationCreateDialog
        isOpen={isOpen}
        handleCloseDialog={handleCloseDialog}
        register={dialogRegister}
        errors={errors}
        handleSubmit={dialogHandleSubmit(onSimulationSubmit)}
        error={simulationCreateError}
      />
    </div>
  );
};

export default Simulation;
