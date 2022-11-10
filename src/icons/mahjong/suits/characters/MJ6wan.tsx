import React from "react";

type Props = {
  width?: number;
  height?: number;
};

function Icon(props: Props) {const { width = 139.764, height = 200 } = props;
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
      <g transform="matrix(4.03323 0 0 4.03323 -837.848 -33.177)">
        <path d="M220.043 24.955c.079-.12.169-.259.269-.418.099-.159.179-.299.239-.418.06-.12.149-.239.269-.359.119-.119.239-.218.358-.298.199-.159.389-.259.568-.299.179-.039.408-.069.687-.09.278-.02.478-.049.598-.089.717.398 1.473 1.116 2.27 2.151-.04.2-.119.369-.239.508-.12.14-.309.349-.567.627-.26.279-.488.558-.687.836-.559 0-1.843.329-3.854.986-2.012.657-3.356.986-4.033.986-.996 0-1.613-.12-1.852-.359.199-.199.617-.368 1.254-.508.637-.139 1.095-.269 1.375-.388 2.509-.916 3.764-1.573 3.764-1.972-.001-.319-.141-.618-.419-.896z"></path>
        <path d="M228.109 20.474c-.04 0-1.474.458-4.301 1.374-2.829.917-4.601 1.374-5.318 1.374-.319 0-.797-.128-1.434-.388-.638-.258-.956-.448-.956-.567 0-.199.269-.389.807-.568.538-.179.946-.269 1.225-.269.079 0 .248.01.508.03.258.021.448.03.567.03.995 0 2.07-.218 3.226-.657.12-.438.159-.677.12-.717-.2-.358-.657-.856-1.375-1.494 0-.995-.1-1.733-.298-2.211.159-.159.358-.427.597-.806.239-.378.418-.607.538-.688a.947.947 0 01.358-.239c.12-.039.318-.06.597-.06.278 0 .498-.02.657-.06 1.076 1.156 1.613 2.052 1.613 2.689 0 .518-.179 1.036-.538 1.553-.358.518-.538.876-.538 1.075 0 .08.03.17.089.269.06.1.09.17.09.209a51.27 51.27 0 002.987-1.135c.956-.397 1.653-.687 2.091-.866.438-.179.777-.269 1.016-.269.199 0 .468.06.807.179.338.119.766.279 1.285.478.517.199.935.358 1.254.478.08.04.229.11.448.209.219.1.368.17.448.209.079.04.209.1.388.179.179.08.299.149.358.209.06.06.139.13.239.209a.77.77 0 01.209.239c.04.08.079.17.12.269.039.1.06.209.06.328 0 .478-.14.896-.419 1.255-.279.359-.618.538-1.016.538-.239 0-1.215-.397-2.928-1.195-1.709-.795-2.904-1.193-3.581-1.193z"></path>
        <path
          fill="#870000"
          d="M222.792 44.133c-.16 0-.478.1-.956.299l-.239.478c-.2.319-.379.558-.538.717-.598-.358-.896-1.513-.896-3.465 0-1.513.08-2.608.239-3.286 1.473-.239 3.096-.598 4.869-1.076 1.772-.478 2.877-.717 3.316-.717.836 0 1.255.279 1.255.836l-.418 1.553a12.357 12.357 0 00-.418 3.227c0 .637.039 1.314.12 2.031.756.04 1.573.16 2.449.358.875.2 1.782.598 2.718 1.195.936.598 1.404 1.295 1.404 2.091 0 .678-.26 1.195-.777 1.553-.518.358-1.175.538-1.971.538-.2 0-.648.13-1.344.389-.698.258-1.225.388-1.583.388-.518 0-1.464-.269-2.838-.807-1.375-.538-2.34-.986-2.898-1.344-.2.08-.409.209-.627.388-.219.18-.388.269-.508.269-.199 0-.836-.159-1.912-.478 0 .041-.01.16-.03.358-.021.2-.04.349-.06.448-.021.1-.04.219-.06.358a.573.573 0 01-.149.329.405.405 0 01-.299.12c-.119 0-.249-.08-.388-.239a2.046 2.046 0 01-.358-.627c-.1-.258-.2-.508-.299-.747a7.046 7.046 0 01-.269-.777 4.465 4.465 0 00-.179-.538h-.717c-.757 0-1.455-.12-2.091-.358-.637-.239-.956-.577-.956-1.016 0-.039.009-.099.03-.179.02-.08.03-.159.03-.239.358 0 .856.04 1.494.12.637.08 1.135.12 1.494.12h.239c-.041-.318-.12-.767-.239-1.344l-.298-1.434c-.081-.378-.12-.667-.12-.866 0-.079.08-.199.239-.358.478.08.826.309 1.045.687.219.379.408.906.568 1.583.159.678.358 1.235.597 1.673.557 0 1.314-.159 2.271-.478 0-.119.009-.397.03-.836.017-.439.028-.738.028-.897zm7.468-8.185c-1.195 0-2.967.349-5.317 1.045-2.351.697-3.904 1.045-4.66 1.045-2.39 0-3.943-.438-4.66-1.314.717-.438 1.255-.657 1.613-.657.397 0 1.005.1 1.822.299.816.2 1.503.298 2.061.298.796 0 1.334-.079 1.613-.239.278-.159.418-.517.418-1.076 0-.119-.11-.209-.328-.269-.22-.06-.369-.149-.448-.269 0-.159.03-.278.089-.358a3.66 3.66 0 01.299-.329c.139-.139.249-.289.329-.448.08-.12.229-.368.448-.747.218-.378.397-.637.538-.777a.691.691 0 01.508-.209c.278 0 .418.2.418.597 0 .319-.03.648-.09.986a8.14 8.14 0 01-.299 1.135c-.14.418-.229.747-.269.986.079.2.218.299.418.299.239 0 .587-.458 1.045-1.375.458-.916.688-1.573.688-1.971 0-.239-.13-.468-.389-.687-.259-.219-.429-.389-.508-.508.318-.717 1.016-1.274 2.091-1.673.796.279 1.195 1.016 1.195 2.21 0 .398-.17.876-.508 1.434-.339.559-.528 1.076-.568 1.554.318-.04.756-.12 1.315-.239.557-.12 1.114-.209 1.672-.269.558-.06 1.155-.09 1.792-.09 1.274 0 2.011.14 2.21.418a2.675 2.675 0 01-1.314 1.254c-.516-.036-1.591-.056-3.224-.056zm-9.559 11.65c.159.398.299.717.418.956.558-.12 1.195-.338 1.912-.657-.2-.239-.299-.557-.299-.956zm.896-7.887v1.076h.12l.12.06 1.075-.179c0-.318.04-.717.12-1.195zm1.195 1.972c-.239.041-.499.081-.777.12-.239 0-.369.021-.389.06a.605.605 0 00-.03.239v.239c0 .081.009.219.03.418.02.2.03.339.03.418.199 0 .577-.039 1.136-.119zm1.493-2.509c0 .2-.03.418-.089.658-.06.239-.09.438-.09.597.398-.08.856-.169 1.375-.269.517-.099.896-.169 1.135-.209 0-.199.01-.438.03-.717.019-.278.03-.498.03-.657-.359.08-.777.189-1.255.329a8.708 8.708 0 01-1.136.268zm-.179 2.27v1.314c.558-.04 1.354-.219 2.39-.538 0-.598.02-1.055.06-1.375-.877.281-1.694.48-2.45.599zm.12 2.39v1.613a11.566 11.566 0 002.33-.657c0-.677-.021-1.195-.06-1.553-.2.08-.548.179-1.046.299-.498.119-.906.219-1.224.298zm.059 2.688c0 .638.099.956.299.956.159 0 .329-.03.508-.089.179-.06.418-.149.717-.269a9.14 9.14 0 01.867-.299c-.081-.438-.1-.756-.06-.956-.24.041-1.016.26-2.331.657zm5.019-.716c0 .081.03.26.09.538.06.279.089.519.089.717 0 .2-.06.418-.179.657-.757.518-1.494.776-2.21.776-.04-.039-.1-.159-.179-.358a7.207 7.207 0 00-.179-.418c-.239.08-.508.219-.807.418-.299.2-.548.339-.747.418.159.239.557.488 1.195.747.637.26 1.135.389 1.494.389.239 0 .468-.05.687-.149.218-.099.458-.249.717-.448a4.26 4.26 0 01.627-.418c.199-.08.587-.139 1.165-.18.577-.039 1.016-.149 1.314-.328.299-.18.448-.488.448-.926 0-.318-.418-.627-1.254-.926-.836-.299-1.594-.469-2.271-.509z"
        ></path>
        <path d="M225.301 23.401c1.473 0 3.037.508 4.69 1.523 1.652 1.016 2.479 1.902 2.479 2.659 0 .438-.119.876-.358 1.314-.239.439-.458.698-.658.777-.956-.517-2.111-1.453-3.465-2.808-1.354-1.353-2.25-2.509-2.688-3.465z"></path>
      </g>
    </svg>
  );
}

export default Icon;
