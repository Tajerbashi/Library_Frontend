import React  from "react";
import _ from "lodash";
import axios from "axios";
import FilterBuilder from "devextreme-react/filter-builder";
import { useFieldArray, Controller } from "react-hook-form";
import { required } from "Utilities/validators";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { DatePicker } from "@material-ui/pickers";
import jMoment from "moment-jalaali";
import { Alert } from "reactstrap";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import MaskedInput from "react-text-mask";
import { TextField, Select, InputLabel, FormControl } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";


export const RGHiddenField = (props) => {
  const { value, onChange } = props;

  return <input type="hidden" value={_.toString(value)} onChange={onChange} />;
};

export const RGLabelField = ({ value, label }) => {
  return value;
};

export const RGTextField = (props) => {
  const { label, name, value, errors, onChange, ...custom } = props;

  return (
    <TextField
      label={label}
      value={_.toString(value)}
      error={_.has(errors, `${name}`)}
      onChange={onChange}
      autoComplete={"off"}
      fullWidth
      {...custom}
    />
  );
};

export const RGMaskTextField = (props) => {
  const { label, name, value, errors, onChange, ...custom } = props;

  return (
    <MaskedInput
      mask={[/\d/, "-", /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
      label={label}
      name={name}
      showMask
      onChange={onChange}
      {...custom}
    />
  );
};

export const RGDateField = (props) => {
  const { label, name, value, errors, onChange, ...custom } = props;

  return (
    <DatePicker
      clearable
      label={label}
      okLabel="تأیید"
      cancelLabel="لغو"
      clearLabel="پاک کردن"
      labelFunc={(date) =>
        value ? jMoment(value).format("jYYYY/jMM/jDD") : ""
      }
      value={value || null}
      fullWidth
      onChange={onChange}
      error={false}
    />
  );
};

export const RGCheckboxField = (props) => {
  const { label, checked, onChange, controlClassName } = props;
  if (checked) console.log(label);
  return label ? (
    <FormControlLabel
      classes={{ root: controlClassName || "mt-10" }}
      control={
        <Checkbox
          color="primary"
          checked={checked ? true : false}
          onChange={(e) => {
            onChange(e.target.checked);
          }}
        />
      }
      label={label}
    />
  ) : (
    <Checkbox
      color="primary"
      checked={checked ? true : false}
      onChange={(e) => {
        onChange(e.target.checked);
      }}
    />
  );
};

export const RGSelectField = (props) => {
  const { label, name, value, errors, onnChange, onChange, items, ...custom } = props;
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={_.toString(value)}
        error={_.has(errors, `${name}`)}
        onChange={(e) => {
          onChange(e.target.value);

          if (onnChange)
            onnChange(e.target.value);
        }}
        {...custom}
      >
        <MenuItem key={""} value="">انتخاب کنید</MenuItem>
        {items.map((item) => (
          <MenuItem key={item.value} value={_.toString(item.value)} selected={item.selected}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const RGSelectArray = (props) => {
  const { name, control, errors, label, items } = props;
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    { control, name, keyName: "guid" }
  );

  return (
    <React.Fragment>
      {fields.map((field, index) => (
        <Grid key={field.guid} container spacing={3}>
          <React.Fragment>
            <Controller
              label={"id"}
              name={`${name}[${index}].id`}
              defaultValue={field.id}
              as={<RGHiddenField />}
              control={control}
              errors={errors}
            />
          </React.Fragment>
          <Grid item xs={11}>
            <Controller
              label={label}
              name={`${name}[${index}]`}
              as={<RGSelectField />}
              control={control}
              errors={errors}
              items={items}
              validate={[required]}
            />
          </Grid>
          <Grid item xs={1} className={"text-right"}>
            <IconButton
              className={"text-danger mt-10"}
              onClick={() => remove(index)}
            >
              <i className="fas fa-minus-square" />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Grid container spacing={3}>
        <Grid item xs={11} />
        <Grid item xs={1} className={"text-right"}>
          <Fab size="small" className={"btn-success"} onClick={() => append()}>
            <i className="fas fa-plus" />
          </Fab>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};


export const RGDebutsField = (props) => {
  const { name, control, errors, readOnly } = props;
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    { control, name, keyName: "guid" }
  );

  return (
    <React.Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>سال</TableCell>
            <TableCell>عنوان</TableCell>
            <TableCell>توضیحات</TableCell>
            <TableCell>مبلغ</TableCell>
            <TableCell>مبلغ رای</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fields.map((field, index) => (
            <TableRow hover key={field.guid}>
              <TableCell>{field.year}</TableCell>
              <TableCell>{field.title}</TableCell>
              <TableCell>{field.description}</TableCell>
              <TableCell>{field.price}</TableCell>
              <TableCell>
                {readOnly ? (
                  field.approvedPrice
                ) : (
                  <Controller
                    label={"مبلغ"}
                    name={`${name}[${index}].approvedPrice`}
                    defaultValue={field.approvedPrice}
                    as={<RGTextField />}
                    control={control}
                    errors={errors}
                    validate={[required]}
                  />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableHead>
          <TableRow>
            <TableCell colSpan={3}>جمع کل:</TableCell>
            <TableCell>
              {fields.length > 0 &&
                _.sum(fields.map((item) => parseInt(item.price) || 0))}
            </TableCell>
            <TableCell>
              {fields.length > 0 &&
                _.sum(fields.map((item) => parseInt(item.approvedPrice) || 0))}
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </React.Fragment>
  );
};

export const RGVoteOutcomes = (props) => {
  const { name, control, errors, label, actionButtons } = props;
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    { control, name, keyName: "guid" }
  );

  return (
    <React.Fragment>
      <div className="card p-20 mt-25">
        <h5 className="mb-20">{label}</h5>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {_.get(errors, `${name}.type`) == "REQUIRED" && (
              <Alert color="danger">لطفا {label} را مشخص نمایید.</Alert>
            )}
            {fields.map((field, index) => (
              <Grid key={field.guid} container spacing={3}>
                <React.Fragment>
                  <Controller
                    label={"id"}
                    name={`${name}[${index}].id`}
                    defaultValue={field.id}
                    as={<RGHiddenField />}
                    control={control}
                    errors={errors}
                  />
                </React.Fragment>
                <Grid item xs={8}>
                  <Controller
                    label={"عملیات"}
                    name={`${name}[${index}].actionButtonKey`}
                    as={<RGSelectField />}
                    control={control}
                    errors={errors}
                    items={actionButtons}
                    validate={[required]}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Controller
                    label={"درصد"}
                    name={`${name}[${index}].percentage`}
                    as={<RGTextField />}
                    control={control}
                    errors={errors}
                    validate={[required]}
                  />
                </Grid>
                <Grid item xs={1} className={"text-right"}>
                  <IconButton
                    className={"text-danger mt-10"}
                    onClick={() => remove(index)}
                  >
                    <i className="fas fa-minus-square" />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
            <Grid container spacing={3}>
              <Grid item xs={11} />
              <Grid item xs={1} className={"text-right"}>
                <Fab
                  size="small"
                  className={"btn-success"}
                  onClick={() => append({})}
                >
                  <i className="fas fa-plus" />
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export const RGSignsArray = (props) => {
  const { name, control, errors, signActionButtons } = props;
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    { control, name, keyName: "guid" }
  );

  return (
    <React.Fragment>
      {_.get(errors, `${name}.type`) == "REQUIRED" && (
        <Alert color="danger">لطفا امضا ها را مشخص نمایید.</Alert>
      )}
      {_.get(errors, `${name}.type`) == "DUPLICATE_KEY" && (
        <Alert color="danger">لطفا امضا های تکراری را حذف نمایید.</Alert>
      )}
      {fields.map((field, index) => (
        <Grid key={field.guid} container spacing={3}>
          <React.Fragment>
            <Controller
              label={"id"}
              name={`${name}[${index}].id`}
              defaultValue={field.id}
              as={<RGHiddenField />}
              control={control}
              errors={errors}
            />
          </React.Fragment>
          <Grid item xs={5}>
            <Controller
              label={"عنوان"}
              name={`${name}[${index}].title`}
              defaultValue={field.title}
              as={<RGTextField />}
              control={control}
              errors={errors}
              validate={[required]}
            />
          </Grid>
          <Grid item xs={3}>
            <Controller
              label={"کلید"}
              name={`${name}[${index}].key`}
              defaultValue={field.key}
              as={<RGTextField />}
              control={control}
              errors={errors}
              validate={[required]}
            />
          </Grid>
          <Grid item xs={3}>
            <Controller
              label={"عملیات"}
              name={`${name}[${index}].stepActionButtonKey`}
              defaultValue={field.stepActionButtonKey}
              as={<RGSelectField />}
              control={control}
              errors={errors}
              items={signActionButtons}
              validate={[required]}
            />
          </Grid>
          <Grid item xs={1} className={"text-right"}>
            <IconButton
              className={"text-danger mt-10"}
              onClick={() => remove(index)}
            >
              <i className="fas fa-minus-square" />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Grid container spacing={3}>
        <Grid item xs={11} />
        <Grid item xs={1} className={"text-right"}>
          <Fab
            size="small"
            className={"btn-success"}
            onClick={() => append({})}
          >
            <i className="fas fa-plus" />
          </Fab>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const getFilterDataType = (type) => {
  let dataType;

  // { title: 'متن', value: 0 },
  // { title: 'عدد', value: 1 },
  // { title: 'بله/خیر', value: 2 },

  switch (type) {
    case "0":
      dataType = "string";
      break;
    case "1":
      dataType = "number";
      break;
    case "2":
      dataType = "boolean";
      break;
    default:
      dataType = "string";
      break;
  }

  return dataType || "string";
};

export const RGConditionsField = (props) => {
  const { label, name, value, errors, onChange, variables } = props;

  return (
    <FilterBuilder
      fields={[
        ...variables.map((item) => ({
          caption: item.title,
          dataField: item.value,
          dataType: getFilterDataType(item.type),
        })),
        {
          caption: "[عملیات]",
          dataField: "actionButton",
          dataType: "string",
        },
      ]}
      value={value}
      onValueChanged={(e) => onChange(e.value)}
    />
  );
};

export const RGAutocompleteField = (props) => {
  const { label, name, value, errors, onChange, onGetValues, CustomOptions } = props;
  console.log("RGAutocompleteField", value);
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [options, setOptions] = React.useState(CustomOptions ?? []);
  const [cancelToken, setCancelToken] = React.useState();
  const [timer, setTimer] = React.useState();

  return (
    <Autocomplete
      clearOnEscape={true}
      // value={_.find(options, x => x.value == value)}
      open={open}
      options={options}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      getOptionSelected={(option, val) => option.value === val}
      getOptionLabel={(option) => option.title || ""}
      onChange={(e, option) => onChange(option.value)}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={(e) => {
            const value = e.target.value;

            if (isLoading) cancelToken.cancel();

            if (timer) clearTimeout(timer);

            setOptions([]);

            const nextTimer = setTimeout(() => {
              const nextCancelToken = axios.CancelToken.source();

              setIsLoading(true);
              setCancelToken(nextCancelToken);

              onGetValues(value, { cancelToken: nextCancelToken.token })
                .then(({ data }) => {
                  setIsLoading(false);
                  setOptions([...CustomOptions, ...data]);
                });
            }, 300);

            setTimer(nextTimer);
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
          label={label}
        />
      )}
      noOptionsText="لطفا کلمه مورد نظر را جستجو کنید..."
      loadingText="لطفا صبر کنید..."
      openText="باز"
      closeText="بسته"
      clearText="انصراف"
    />
  );
};
