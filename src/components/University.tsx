function University(props: any) {
  const { data } = props;

  return (
    <div>
      <h2>Want to Study, Here are List of University</h2>

      {data?.map((item: any) => (
        <table>
          <th>
            <td>University Name</td>
            <td>Country</td>
            <td>Web Page</td>
          </th>

          <tr>
            <td>{item.name}</td>
            <td>{item.country}</td>
            <a href={item.web_pages[0]}>{item.web_pages[0]}</a>
          </tr>
        </table>
      ))}
    </div>
  );
}

export default University;
