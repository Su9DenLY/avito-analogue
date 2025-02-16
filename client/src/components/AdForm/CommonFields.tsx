import React from "react";
import {FC} from "react";
import {Control, Controller, FieldErrors, UseFormSetValue} from "react-hook-form";
import {Form, Input, Select} from "antd";
import {ItemType, AdFormData} from "@/types/adTypes";

interface CommonFieldsProps {
    control: Control<AdFormData>;
    errors: FieldErrors<AdFormData>;
    setValue: UseFormSetValue<AdFormData>;
    categoryOptions: readonly ItemType[];
}

const CommonFields: FC<CommonFieldsProps> = ({control, errors, setValue, categoryOptions}) => {
    return (
        <>
            <Form.Item label="Название" validateStatus={errors.name ? "error" : ""} help={errors.name?.message}>
                <Controller
                    name="name"
                    control={control}
                    rules={{required: "Обязательно"}}
                    render={({field}) => <Input {...field} />}
                />
            </Form.Item>

            <Form.Item label="Описание" validateStatus={errors.description ? "error" : ""}
                       help={errors.description?.message}>
                <Controller
                    name="description"
                    control={control}
                    rules={{required: "Обязательно"}}
                    render={({field}) => <Input.TextArea {...field} />}
                />
            </Form.Item>

            <Form.Item label="Локация" validateStatus={errors.location ? "error" : ""} help={errors.location?.message}>
                <Controller
                    name="location"
                    control={control}
                    rules={{required: "Обязательно"}}
                    render={({field}) => <Input {...field} />}
                />
            </Form.Item>

            <Form.Item label="Категория" validateStatus={errors.type ? "error" : ""} help={errors.type?.message}>
                <Controller
                    name="type"
                    control={control}
                    rules={{required: "Выберите категорию"}}
                    render={({field}) => (
                        <Select {...field} onChange={(value) => setValue("type", value as ItemType)}>
                            {categoryOptions.map((cat) => (
                                <Select.Option key={cat} value={cat}>
                                    {cat}
                                </Select.Option>
                            ))}
                        </Select>
                    )}
                />
            </Form.Item>
        </>
    );
};

export default CommonFields;
