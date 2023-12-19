import { FC } from 'react';
import { useLabels } from '../../hooks';
import { LoadingIcon } from '../../shared/components/LoadingIcon';

interface LabelPickerProps {
  selectedLabels: string[];
  onChange: (labelName: string) => void;
}

export const LabelPicker: FC<LabelPickerProps> = ({
  selectedLabels,
  onChange,
}) => {
  const labelsQuery = useLabels();

  if (labelsQuery.isLoading) {
    return <LoadingIcon />;
  }

  return (
    <div>
      {labelsQuery.data?.map((label) => (
        <span
          key={label.id}
          className={`${
            selectedLabels.includes(label.name) ? 'labelActive' : ''
          } badge rounded-pill m-1 label-picker`}
          style={{
            border: `1px solid #${label.color}`,
            color: `#${label.color}`,
          }}
          onClick={() => onChange(label.name)}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
