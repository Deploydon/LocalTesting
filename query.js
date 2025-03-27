require("dotenv").config();

const { getClient } = require("./lib");
const { CONTRACT_ADDRESS } = require("./config");

async function query() {
  const { wallet, signingClient: client, myAddress } = await getClient();

  console.log("My address:", myAddress);
  const result = await client.queryContractSmart(CONTRACT_ADDRESS, {
    user_stats: {
      user: myAddress,
    },
  });
  console.log("Result:", JSON.stringify(result, null, 2));
}

async function main() {
  await query();
}

main();
