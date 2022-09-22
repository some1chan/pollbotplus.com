import * as dotenv from "dotenv";
dotenv.config({
	path: `.env.${process.env.NODE_ENV}`,
});

import axios from "axios";
import type { SourceNodesArgs } from "gatsby";

export async function sourceNodes({
	actions: { createNode, createRedirect },
	createContentDigest,
}: SourceNodesArgs) {
	const api = process.env.TOP_GG_API ?? "https://top.gg/api";
	const token = process.env.TOP_GG_TOKEN ?? "";
	const userId = process.env.DISCORD_USER_ID ?? "804245390642642965";

	const instance = axios.create({
		baseURL: api,
		headers: {
			Authorization: token,
		},
	});
	const result = await instance.get(`/bots/${userId}/stats`);

	createNode({
		serverCount: result.data.server_count,

		// Required
		id: `top-gg-data`,
		parent: null,
		children: [],
		internal: {
			type: `Topgg`,
			contentDigest: createContentDigest(result.data),
		},
	});

	createRedirect({
		fromPath: `/invite`,
		toPath: `https://discord.gg/QrRrnSDjHw`,
	});
}
