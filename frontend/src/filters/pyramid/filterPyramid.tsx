import {PyramidDetail} from '../../types/pyramidtypes';

export const filterByStep = (
  pyramidStep: {
    pyramidstepsearch1: boolean;
    pyramidstepsearch2: boolean;
    pyramidstepsearch3: boolean;
    pyramidstepsearch4: boolean;
    pyramidstepsearch5: boolean;
    pyramidstepsearch6: boolean;
  },
  pyramid: Array<PyramidDetail>,
) =>
  pyramid!.filter(
    pyramid =>
      (pyramid.pyramidStep === 1 && pyramidStep.pyramidstepsearch1) ||
      (pyramid.pyramidStep === 2 && pyramidStep.pyramidstepsearch2) ||
      (pyramid.pyramidStep === 3 && pyramidStep.pyramidstepsearch3) ||
      (pyramid.pyramidStep === 4 && pyramidStep.pyramidstepsearch4) ||
      (pyramid.pyramidStep === 5 && pyramidStep.pyramidstepsearch5) ||
      (pyramid.pyramidStep === 6 && pyramidStep.pyramidstepsearch6),
  );

export const filterByPyramidName = (pyramidName: string) => (
  pyramid: PyramidDetail,
) =>
  !pyramidName ||
  pyramid?.leagueName?.toLowerCase().includes(pyramidName.toLowerCase());

export const filterByActiveOnly = (
  pyramid: Array<PyramidDetail> | undefined,
  activeOnly = false,
) =>
  pyramid!.filter(pyramid =>
    activeOnly === true ? pyramid.pyramidStepInactive === false : true,
  );

export const filterClubsBySelectedLeague = (
  pyramid: Array<PyramidDetail> | undefined,
  selectedPyramidId: number,
) =>
  selectedPyramidId !== 0
    ? pyramid!.filter(pyramid => pyramid.pyramidId === selectedPyramidId)[0]
        .clubs
    : undefined;
