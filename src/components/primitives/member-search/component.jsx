import React, { useEffect, useState } from 'react';
import { Button } from '../buttons';
import * as styles from './styles';
import { ButtonColorEnum, ButtonSizeEnum } from 'common/enums';
import { SortItem } from '../sort-item';
import { useDispatch, useSelector } from 'react-redux';
import { languages, technologies, workloads } from 'store/filter';
import { useAuth } from 'hooks/useAuth';

const MemberSearchForm = ({search}) => {

  const dispatch = useDispatch();
  const { auth } = useAuth();
  const { technology, language, workload } = useSelector(state => state.filter);

  const [technologiesVisible, setTechnologiesVisible] = useState(false);
  const [languagesVisible, setLanguagesVisible] = useState(false);
  const [workloadsVisible, setWorkloadsVisible] = useState(false);

  const [technologiesChecked, setTechnologiesChecked] = useState(false);
  const [languagesChecked, setLanguageChecked] = useState(false);
  const [workloadsChecked, setWorkloadsChecked] = useState(false);
  const [freeChecked, setFreeChecked] = useState(false);
  const [hasResumeChecked, setHasResumeChecked] = useState(false);

  useEffect(() => {
    dispatch(technologies({authorization: auth.accessToken }));
    dispatch(languages({authorization: auth.accessToken }));
    dispatch(workloads({authorization: auth.accessToken }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkLanguages = (e) => {
    console.log(e.target);
    setLanguageChecked(true);
    setLanguagesVisible(false);
  }

  const checkTechnologies = (e) => {
    setTechnologiesChecked(true);
    setTechnologiesVisible(false);
  }

  const checkWorkloads = (e) => {
    setWorkloadsChecked(true);
    setWorkloadsVisible(false);
  }

  return (
    <form onSubmit={search} css={styles.form}>
        <div css={styles.container}>
            <SortItem text='Language' checked={languagesChecked} onClick={(e) => setLanguagesVisible(!languagesVisible)} />
            {languagesVisible && language.length && language.map(lang => <div onClick={checkLanguages} key={lang}>{lang}</div>)}
            <SortItem text='Technology' checked={technologiesChecked} onClick={(e) => setTechnologiesVisible(!technologiesVisible)} />
            {technologiesVisible && technologies.length && technology.map(tech => <div onClick={checkTechnologies} key={tech}>{tech}</div>)}
            <SortItem text='Workload' checked={workloadsChecked} onClick={(e) => setWorkloadsVisible(!workloadsVisible)} />
            {workloadsVisible && workload.length && workload.map(work => <div onClick={checkWorkloads} key={work}>{work}</div>)}
            <SortItem text='Free' checked={freeChecked} onClick={(e) => setFreeChecked(!freeChecked)} />
            <SortItem text='Has resume' checked={hasResumeChecked} onClick={(e) => setHasResumeChecked(!hasResumeChecked)} />
        </div>
        <Button text='Search' color={ButtonColorEnum.LILAC} size={ButtonSizeEnum.SMALL} />
    </form>
  )
}

export { MemberSearchForm };