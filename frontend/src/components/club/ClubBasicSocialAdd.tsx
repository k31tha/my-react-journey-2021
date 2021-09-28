import * as React from 'react';
import useClubSearchApi from '../../hooks/useClubSearchApi';
import {useForm} from 'react-hook-form';
import {ClubSearchActionType} from '../../types/clubtypes';
import {ApiError} from '../../types/nlstypes';
import {addClubBasicSocial} from '../../api/clubApi';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Redirect} from 'react-router-dom';

export type ClubBasicSocialAddProps = {
  clubGuid: string;
};

const ClubBasicSocialAdd = ({
  clubGuid,
}: ClubBasicSocialAddProps): JSX.Element => {
  const [{clubs, clubStatus}, dispatch] = useClubSearchApi();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [formErrors, setFormErrors] = React.useState<Array<ApiError>>([]);
  const [socialAdded, setSocialAdded] = React.useState<boolean>(false);
  const onSubmit = (data: any) => {
    try {
      //let clubDetail = addClub(data);
      addClubBasicSocial(data).then(clubDetail => {
        if (clubDetail!.fluentErrors?.length > 0) {
          setFormErrors(clubDetail!.fluentErrors);
        } else {
          setFormErrors([]);
          setSocialAdded(true);

          //dispatch({
          //  type: ClubSearchActionType.ClubAdd,
          //  clubDetail: clubDetail,
          //});
        }
      });
    } catch {}
  };
  if (socialAdded) {
    let socialAddedLink =
      '/club/' + clubs?.find(u => u.ClubGuid === clubGuid)?.UrlFriendlyName;
    return <Redirect to={socialAddedLink} />;
  }
  return (
    <div data-testid="clubsocialbasicadd">
      <Paper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            id="Wikipedia"
            defaultValue=""
            {...register('Wikipedia', {required: true})}
            label={'Wikipedia'}
          />
          {errors.Wikipedia && (
            <p>
              <span>This field is required</span>
            </p>
          )}
          <br />
          <TextField
            fullWidth
            id="Twitter"
            defaultValue=""
            {...register('Twitter')}
            label={'Twitter'}
          />
          <br />
          <TextField
            fullWidth
            id="Facebook"
            defaultValue=""
            {...register('Facebook')}
            label={'Facebook'}
          />
          <br />
          <TextField
            fullWidth
            id="Instagram"
            defaultValue=""
            {...register('Instagram')}
            label={'Instagram'}
          />
          <TextField
            id="ClubGuid"
            defaultValue={clubGuid}
            {...register('ClubGuid')}
            hidden
          />
          <br />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default ClubBasicSocialAdd;
