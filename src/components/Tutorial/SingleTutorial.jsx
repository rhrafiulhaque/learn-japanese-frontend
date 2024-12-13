import { Link } from "react-router-dom";

function SingleTutorial({ tutorial }) {
  const { tutorialLink, tutorialTitle, _id } = tutorial || {};

  // Extract the YouTube video ID from the tutorialLink
  const videoId = tutorialLink.split("/").pop();
  console.log(videoId);

  // Generate the YouTube thumbnail URL
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <Link
      to={`/tutorials/${_id}`}
      className="rounded-lg overflow-hidden bg-color-gray"
    >
      <img
        src={thumbnailUrl}
        alt={tutorialTitle}
        className="w-full h-40 object-cover"
      />
      <div className="p-2">
        <p className="font-semibold">{tutorialTitle}</p>
      </div>
    </Link>
  );
}

export default SingleTutorial;
