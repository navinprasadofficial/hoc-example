function Bored(props: any) {
  const { data } = props;

  return (
    <div>
      <h2>Feeling Bored, you can try below activity</h2>
      {data ? (
        <>
          <table>
            <th>
              <td>Activity</td>
              <td>Type</td>
              <td>Participants</td>
            </th>

            <tr>
              <td>{data.activity}</td>
              <td>{data.type}</td>
              <td>{data.participants}</td>
            </tr>
          </table>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Bored;
