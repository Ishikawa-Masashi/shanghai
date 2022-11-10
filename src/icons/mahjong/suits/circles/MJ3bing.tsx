import React from "react";

type Props = {
  width?: number;
  height?: number;
};

function Icon(props: Props) {
  const { width = 139.764, height = 200 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="139.764"
      // height="200"
      // width={width}
      // height={height}
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 139.764 200"
      xmlSpace="preserve"
    >
      <g transform="matrix(4.03323 0 0 4.03323 -375.188 -611.503)">
        <path
          fill="#00082d"
          d="M114.353 172.407c1.115 1.115 1.673 2.449 1.673 4.003 0 1.553-.558 2.888-1.673 4.003-1.116 1.115-2.45 1.673-4.003 1.673s-2.888-.558-4.003-1.673c-1.116-1.115-1.673-2.45-1.673-4.003 0-1.554.557-2.888 1.673-4.003 1.115-1.115 2.45-1.673 4.003-1.673s2.887.558 4.003 1.673zm-.627 7.378c.936-.935 1.404-2.061 1.404-3.375 0-1.315-.469-2.439-1.404-3.376-.936-.935-2.061-1.404-3.375-1.404s-2.44.469-3.376 1.404c-.936.937-1.404 2.061-1.404 3.376 0 1.314.468 2.44 1.404 3.375.936.937 2.062 1.404 3.376 1.404s2.439-.467 3.375-1.404z"
        ></path>
        <path
          fill="#870000"
          d="M113.308 173.453c.816.816 1.225 1.803 1.225 2.958 0 1.155-.409 2.142-1.225 2.957-.817.817-1.803 1.225-2.958 1.225-1.156 0-2.142-.408-2.958-1.225-.817-.815-1.225-1.802-1.225-2.957 0-1.155.408-2.141 1.225-2.958.816-.816 1.802-1.225 2.958-1.225 1.155 0 2.141.409 2.958 1.225zm-4.75 3.017c0-.239.02-.438.06-.598a2.31 2.31 0 01.179-.478l.179-.359-.657-.956h-.717a3.56 3.56 0 00-.837 2.331v.239l.538.418 1.135-.358zm.956 3.405l.538-.358v-1.195l-.179-.18a1.723 1.723 0 01-1.016-.717l-.239-.12-1.076.358-.239.658c.478.798 1.215 1.315 2.211 1.554zm-.478-6.811l-.239.657.657.956h.239c.159-.039.378-.06.657-.06.278 0 .498.021.657.06h.239l.657-.956-.239-.657c-.478-.158-.917-.239-1.314-.239-.398 0-.836.081-1.314.239zm2.151 4.182c.239-.239.358-.517.358-.836 0-.318-.12-.598-.358-.836a1.146 1.146 0 00-.836-.358c-.319 0-.598.12-.836.358a1.148 1.148 0 00-.358.836c0 .319.12.597.358.836a1.15 1.15 0 001.672 0zm-.837-1.433c.397 0 .597.2.597.598 0 .398-.2.597-.597.597-.398 0-.598-.199-.598-.597 0-.399.2-.598.598-.598zm1.733 1.493c-.597.518-1.075.857-1.434 1.016v1.195l.538.358c.995-.239 1.732-.756 2.21-1.553l-.239-.658zm.06-.836l.12.239 1.135.358.538-.418v-.239c0-.876-.279-1.652-.837-2.331h-.717l-.657.956c.039.081.099.2.179.359.08.159.139.319.179.478.039.16.06.359.06.598z"
        ></path>
        <path
          fill="#00082d"
          d="M107.184 158.964c1.115 1.115 1.673 2.449 1.673 4.003 0 1.553-.558 2.888-1.673 4.003-1.116 1.116-2.45 1.673-4.003 1.673-1.554 0-2.889-.557-4.003-1.673-1.116-1.115-1.673-2.45-1.673-4.003 0-1.554.557-2.888 1.673-4.003 1.114-1.115 2.449-1.673 4.003-1.673 1.553 0 2.887.559 4.003 1.673zm-.628 7.379c.936-.936 1.404-2.061 1.404-3.375 0-1.315-.468-2.439-1.404-3.375-.937-.936-2.061-1.404-3.375-1.404s-2.44.469-3.375 1.404c-.937.936-1.404 2.061-1.404 3.375s.468 2.44 1.404 3.375c.935.937 2.061 1.404 3.375 1.404s2.439-.468 3.375-1.404zm-.418-6.333c.816.816 1.225 1.803 1.225 2.958 0 1.155-.409 2.142-1.225 2.958-.817.816-1.803 1.225-2.958 1.225-1.156 0-2.142-.408-2.958-1.225-.817-.816-1.225-1.802-1.225-2.958 0-1.155.408-2.141 1.225-2.958.816-.816 1.802-1.225 2.958-1.225 1.155 0 2.141.409 2.958 1.225zm-4.75 3.017c0-.239.02-.438.06-.598a2.31 2.31 0 01.179-.478c.08-.159.14-.278.179-.359l-.657-.956h-.717a3.563 3.563 0 00-.836 2.331v.239l.538.418 1.135-.358zm.956 3.406l.538-.358v-1.195l-.179-.18a1.717 1.717 0 01-1.016-.717l-.239-.119-1.076.358-.239.658c.478.796 1.215 1.313 2.211 1.553zm-.478-6.812l-.239.658.657.956h.239c.159-.039.378-.06.657-.06.278 0 .498.021.657.06h.239l.657-.956-.239-.658c-.478-.158-.917-.239-1.314-.239-.398 0-.836.081-1.314.239zm2.151 4.183c.239-.239.358-.517.358-.836 0-.318-.12-.598-.358-.836a1.146 1.146 0 00-.836-.358c-.319 0-.598.12-.836.358a1.146 1.146 0 00-.358.836c0 .319.119.597.358.836s.517.358.836.358c.318 0 .597-.119.836-.358zm-.836-1.434c.398 0 .597.2.597.598 0 .398-.199.597-.597.597-.398 0-.598-.199-.598-.597 0-.399.199-.598.598-.598zm1.732 1.494c-.597.518-1.075.856-1.434 1.016v1.195l.538.358c.995-.239 1.732-.756 2.21-1.553l-.239-.658zm.06-.837l.119.239 1.135.358.538-.418v-.239c0-.875-.279-1.652-.836-2.331h-.717l-.657.956.179.359c.08.159.139.319.179.478.039.16.06.359.06.598zm16.549 22.823c1.115 1.115 1.673 2.449 1.673 4.003 0 1.553-.558 2.888-1.673 4.003-1.115 1.114-2.449 1.672-4.003 1.672-1.553 0-2.888-.558-4.003-1.672-1.116-1.115-1.673-2.45-1.673-4.003 0-1.554.557-2.888 1.673-4.003 1.115-1.115 2.45-1.673 4.003-1.673 1.554 0 2.888.558 4.003 1.673zm-.627 7.378c.936-.935 1.404-2.061 1.404-3.375 0-1.315-.469-2.439-1.404-3.376-.936-.935-2.061-1.404-3.375-1.404s-2.44.469-3.375 1.404c-.937.937-1.404 2.061-1.404 3.376 0 1.314.467 2.44 1.404 3.375.936.937 2.061 1.404 3.375 1.404s2.439-.467 3.375-1.404zm-.418-6.333c.816.817 1.225 1.803 1.225 2.958 0 1.155-.409 2.141-1.225 2.957-.817.817-1.803 1.225-2.958 1.225-1.156 0-2.142-.408-2.958-1.225-.817-.816-1.225-1.802-1.225-2.957 0-1.155.408-2.141 1.225-2.958.816-.815 1.802-1.224 2.958-1.224 1.155 0 2.141.409 2.958 1.224zm-4.75 3.018c0-.239.02-.438.06-.598.04-.158.099-.318.18-.478l.179-.359-.657-.956h-.717a3.563 3.563 0 00-.836 2.331v.239l.538.418 1.135-.358zm.956 3.405l.538-.358v-1.195l-.179-.179a1.72 1.72 0 01-1.016-.717l-.239-.12-1.075.358-.239.657c.478.798 1.214 1.315 2.21 1.554zm-.478-6.811l-.239.657.657.956h.239c.159-.039.378-.06.657-.06.278 0 .498.021.657.06h.239l.657-.956-.239-.657c-.478-.159-.917-.239-1.314-.239-.398 0-.836.08-1.314.239zm2.151 4.182c.239-.239.358-.517.358-.836 0-.318-.119-.598-.358-.836a1.146 1.146 0 00-.836-.358c-.319 0-.597.119-.836.358a1.146 1.146 0 00-.358.836c0 .319.12.597.358.836.239.239.517.359.836.359.318 0 .597-.12.836-.359zm-.836-1.434c.397 0 .598.2.598.598 0 .398-.2.597-.598.597-.398 0-.597-.199-.597-.597 0-.398.198-.598.597-.598zm1.732 1.494c-.597.518-1.075.857-1.434 1.016v1.195l.538.358c.995-.239 1.733-.756 2.211-1.553l-.239-.657zm.06-.836l.119.239 1.136.358.538-.418v-.239a3.57 3.57 0 00-.836-2.331h-.717l-.657.956c.04.081.099.2.18.359.079.159.139.319.179.478.038.16.058.358.058.598z"
        ></path>
      </g>
    </svg>
  );
}

export default Icon;
