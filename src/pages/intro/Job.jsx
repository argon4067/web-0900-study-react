import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

const Job = () => {

  // 쿼리스트링 값을 가져오는 훅 함수 useSearchParams();
  // const [ searchParams ] = useSearchParams();
  // const title = searchParams.get("title");

  // 하위 뎁스의 폴더 useParams()
  const { title } = useParams();

  const jobs = useSelector(({route}) => route.jobs)[title];
  console.log(jobs)






  


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>{title} 기술</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{jobs && jobs.skills}</td>
          </tr>
          {jobs && jobs.skills.map((skill, i) => (
            <tr key={i}>
            <td>{skill}</td>
            </tr>
          )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Job;