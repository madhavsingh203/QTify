import React from "react";

const PlaylistTable = ({ tableData }) => {
    const formatDuration = (durationInMs) => {
        const totalSeconds = Math.floor(durationInMs / 100);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
      
        // Add leading zeros if necessary
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
      
        return `${formattedMinutes}:${formattedSeconds}`;
      };
      
      
//   console.log(tableData);
  return (
    <div className="w-full text-white mt-5">
      <table className="w-full">
        <thead className="">
          <tr>
            <td>Title</td>
            <td>Artist</td>
            <td>Duration</td>
          </tr>
        </thead>
        <tbody className="mt-3">
          {tableData?.map((row) => (
            <React.Fragment key={row?.id}>
              <tr className="h-20">
                <td className="flex gap-2 text-xs md:text-md items-center">
                    <img src={row?.image} className="w-20 h-24 rounded"/>
                    {row?.title}</td>
                <td>
                  {row?.artists?.map((artist, index) => (
                    <p className="text-xs md:text-md" key={index}>{artist}</p>
                  ))}
                </td>
                <td className="text-xs md:text-md">{formatDuration(row?.durationInMs)}</td>
              </tr>
              <tr>
                <td colSpan="3">
                  <hr className="mt-1 mb-1"/>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlaylistTable;
