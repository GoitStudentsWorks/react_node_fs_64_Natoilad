import { useEffect, useState } from 'react';
import icon from '../../../images/sprite.svg';
import {
  Form,
  Field,
  Button,
  Wrap,
  Title,
  CloseBtn,
  IconPlus,
  Priority,
  Label,
  LabelSvg,
  LabelBlockSvg,
  InputSvg,
  InputBlockSvg,
  SSvg,
  BlockSvg,
  Bgpriority,
} from './AddBoard.styled';
import sprite from '../../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { addBoards } from 'redux/content/content-operations';

import { useBg } from 'hooks/backgroundHooks';
import { getBackGrounds } from 'redux/backgrounds/background-operations';
import BgComponent from './bgComponent';

const AddBoard = ({ handleClose, title, background, butName }) => {
  const [value, setValue] = useState(1);

  const dispatch = useDispatch();

  const { backgrounds } = useBg();

  const hundleSubmit = event => {
    event.preventDefault();
    const task = {
      title,
      icon,
      // background,
    };
    dispatch(addBoards(task));
  };
  

  useEffect(() => {
    dispatch(getBackGrounds());
  }, [dispatch]);

  function chengeValue(event) {
    setValue(event.target.value);
  }

  return (
    <Wrap>
      <Form onSubmit={hundleSubmit}>
        <Title>{title}</Title>
        <Field
          id="title"
          type="text"
          required
          name="title"
          placeholder="Title"
        />
        <Label id="my-radio-groupIcon">
          Icons
          <Priority role="group" aria-labelledby="my-radio-groupIcon">
            <InputSvg
              id="project"
              type="radio"
              name="radio"
              value="1"
              // checked={value === '1' ? true : false}
              // onChange={chengeValue}
            />
            <LabelSvg htmlFor="project">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-dashbordicon1'}></use>
              </SSvg>
            </LabelSvg>
            <InputSvg
              id="star"
              type="radio"
              name="radio"
              value="2"
              checked={value === '2' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg htmlFor="star">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-star'}></use>
              </SSvg>
            </LabelSvg>

            <InputSvg
              id="loading"
              type="radio"
              name="radio"
              value="3"
              checked={value === '3' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg htmlFor="loading">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-loading-spin'}></use>
              </SSvg>
            </LabelSvg>
            <InputSvg
              id="puzle"
              type="radio"
              name="radio"
              value="4"
              checked={value === '4' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg htmlFor="puzle">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-puzzle-piece'}></use>
              </SSvg>
            </LabelSvg>
            <InputSvg
              id="container"
              type="radio"
              name="radio"
              value="5"
              checked={value === '5' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg htmlFor="container">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-container'}></use>
              </SSvg>
            </LabelSvg>
            <InputSvg
              id="lightning"
              type="radio"
              name="radio"
              value="6"
              checked={value === '6' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg htmlFor="lightning">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-lightning'}></use>
              </SSvg>
            </LabelSvg>
            <InputSvg
              id="colors"
              type="radio"
              name="radio"
              value="7"
              checked={value === '7' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg htmlFor="colors">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-colors'}></use>
              </SSvg>
            </LabelSvg>
            <InputSvg
              id="hexagon"
              type="radio"
              name="radio"
              value="8"
              checked={value === '8' ? true : false}
              onChange={chengeValue}
            />
            <LabelSvg htmlFor="hexagon">
              <SSvg width="18" height="18">
                <use href={sprite + '#icon-hexagon'}></use>
              </SSvg>
            </LabelSvg>
          </Priority>
        </Label>

        <Label id="my-radio-groupImage">
          Background
          <Bgpriority role="group" aria-labelledby="my-radio-groupImage">
            <InputBlockSvg
              id="block"
              type="radio"
              name="radio"
              value="10"
              // checked={value === '10' ? true : false}
              onChange={chengeValue}
            />
            <LabelBlockSvg for="block">
              <BlockSvg width="28" height="28">
                <use href={sprite + '#icon-block'}></use>
              </BlockSvg>
            </LabelBlockSvg>
            {backgrounds.map(bg => {
              return (
                <>
                  <BgComponent key={bg.bgIcons} bg={bg} />
                </>
              );
            })}
          </Bgpriority>
        </Label>

        <Button type="submit">
          <IconPlus width="28" height="28">
            <use href={icon + '#icon-plus-black'}></use>
          </IconPlus>
          {butName}
        </Button>
        <CloseBtn onClick={handleClose}>
          <svg width="18" height="18">
            <use href={icon + '#icon-close'}></use>
          </svg>
        </CloseBtn>
      </Form>
    </Wrap>
  );
};

export default AddBoard;
