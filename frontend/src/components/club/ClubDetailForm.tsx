import * as React from 'react';
import {useForm} from 'react-hook-form';
import {ClubSearchActionType} from '../../types/clubtypes';
import {ApiError} from '../../types/nlstypes';
import {addClub} from '../../api/clubApi';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {PyramidContext} from '../../App';
import {Link} from 'react-router-dom';

type props = {
  errors: Array<ApiError>;
};
function ClubDetailsAddError(props: props) {
  let errorDetails = '';
  if (props.errors.length > 0) {
    props.errors.forEach(error => {
      errorDetails =
        errorDetails + error.PropertyName + ' : ' + error.ErrorMessage + '\n';
    });
    return <p>{errorDetails}</p>;
  }
  return <></>;
}

const PyramidSelectList = () => {
  const pyramidContext = React.useContext(PyramidContext);
  return (
    <>
      {pyramidContext.state.pyramidDetails
        ?.sort((a, b) => (a.leagueName! >= b.leagueName! ? 1 : -1))
        .map(pyramid => (
          <option value={pyramid.pyramidId}>{pyramid.leagueName}</option>
        ))}
    </>
  );
};
const ClubDetailsAdd = (props: any) => {
  const pyramidContext = React.useContext(PyramidContext);
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [formErrors, setFormErrors] = React.useState<Array<ApiError>>([]);
  const [clubAdded, setClubAdded] = React.useState<boolean>(false);
  const [clubGuid, setClubGuid] = React.useState<string>('');
  const onSubmit = (data: any) => {
    try {
      //let clubDetail = addClub(data);
      addClub(data).then(clubDetail => {
        if (clubDetail!.fluentErrors?.length > 0) {
          setFormErrors(clubDetail!.fluentErrors);
        } else {
          setFormErrors([]);
          props.clubDispatch({
            type: ClubSearchActionType.ClubAdd,
            clubDetail: clubDetail,
          });
          setClubAdded(true);
          setClubGuid(clubDetail!.ClubGuid);
        }
      });
    } catch {}
  };
  //console.log(watch('ClubName')); // watch input value by passing the name of it
  if (clubAdded) {
    let socialAddLink = '/club/socialbasic/add/' + clubGuid;
    return (
      <Paper>
        <p>Club Added with id {clubGuid}</p>
        <p>
          Add Social Details <Link to={socialAddLink}>click here</Link>
        </p>
      </Paper>
    );
  } else {
    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <Paper>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <ClubDetailsAddError errors={formErrors} />
          <TextField
            fullWidth
            id="ClubName"
            defaultValue=""
            {...register('ClubName', {required: true})}
            label={'Club Name'}
          />
          {errors.ClubName && (
            <p>
              <span>This field is required</span>
            </p>
          )}
          <br />
          <TextField
            fullWidth
            id="ClubAddress"
            defaultValue=""
            {...register('ClubAddress')}
            label={'Club Address'}
          />
          <br />
          <TextField
            fullWidth
            id="MainWebsite"
            defaultValue=""
            {...register('MainWebsite')}
            label={'Main website '}
          />
          <br />
          <TextField
            fullWidth
            id="Nicknames"
            defaultValue=""
            {...register('Nicknames')}
            label={'Nicknames'}
          />
          <br />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                defaultChecked={true}
                {...register('Active')}
              />
            }
            label="Active"
            labelPlacement="end"
          />
          <br />
          <FormControlLabel
            control={
              <Checkbox color="primary" {...register('DisableAutoUpdate')} />
            }
            label="Disable Updates"
            labelPlacement="end"
          />
          <br />
          <InputLabel id="StatusTypeIdLabel">Status</InputLabel>
          <Select id="StatusTypeId" {...register('StatusTypeId')} autoWidth>
            <option value="0">Unknown</option>
            <option value="1">Active</option>
            <option value="2">Folded</option>
            <option value="3">Resigned</option>
            <option value="4">Merged</option>
            <option value="5">Promoted to Football League</option>
            <option value="6">Renamed</option>
          </Select>
          <br />
          <InputLabel id="PyramidIdLabel">Pyramid</InputLabel>
          <Select id="PyramidId" {...register('PyramidId')} autoWidth>
            {pyramidContext.state.pyramidDetails
              ?.sort((a, b) => (a.leagueName! >= b.leagueName! ? 1 : -1))
              .map(pyramid => (
                <option value={pyramid.pyramidId}>{pyramid.leagueName}</option>
              ))}
          </Select>
          <br />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Paper>
    );
  }
};
export default ClubDetailsAdd;
