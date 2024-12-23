import {
  Select,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectTrigger,
  SelectValueText,
} from "@/components/common/Select";
import { Option } from "@/components/shared/FilterGroup";
import { cx } from "class-variance-authority";

type Props = {
  optionList: Option[];
  onSelect: (value: string) => void;
};

const SimulationFilter = ({ optionList, onSelect }: Props) => {
  const isOptionsEmpty = optionList.length === 0;

  return (
    <Select
      className="relative w-80 text-center align-middle"
      onSelect={onSelect}
    >
      <SelectTrigger
        className="w-full rounded-[4px] bg-white p-2"
        disabled={isOptionsEmpty}
      >
        <SelectValueText
          className="text-sm"
          placeholder={
            isOptionsEmpty ? "생성된 시뮬레이션이 없습니다" : "시뮬레이션 전체"
          }
        />
      </SelectTrigger>
      {!isOptionsEmpty && (
        <SelectGroup className="top-[42px] max-h-40 w-full rounded-[4px] bg-white p-2 shadow-md">
          {optionList.map((item, index) => (
            <SelectItem
              key={item.value}
              value={item.value}
              label={item.label}
              className={cx(
                "w-full rounded-[4px] px-2 py-1 text-sm",
                index === 0 ? "font-semibold" : "",
              )}
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      )}
      <SelectIcon
        color="#000000"
        className="absolute right-2 top-[10px] z-20"
      />
    </Select>
  );
};

export default SimulationFilter;
