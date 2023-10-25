import { FcOk, FcCancel } from "react-icons/fc";

interface MovieItem {
  movieName: string;
  episodeNumber: number;
  isAvailableForDownload: boolean;
}

interface Props {
  movieItems: MovieItem[];
}

function MovieTable({ movieItems }: Props) {
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Episode number</th>
          <th>AvailableForDownload</th>
          <th>Status</th>
        </tr>
        {movieItems.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.movieName}</td>
              <td>{val.episodeNumber}</td>
              <td>{val.isAvailableForDownload ? <FcOk /> : <FcCancel />}</td>
              <td
                style={{
                  backgroundColor: "blue",
                }}
              ></td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default MovieTable;
