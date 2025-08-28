require("dotenv").config();

const fetch = require('node-fetch');

const token = process.env.TOKEN; // generate token from vercel to communicate with it
const project = process.env.projectName; //Name of project From Vercel dashboard
const team = null;
const limitToKeep = 5; // Keep latest 5 deployments

async function main() {
    const queryParams = new URLSearchParams({
        projectId: project,
        ...(team && { teamId: team }),
        limit: 100,
    });

    const res = await fetch(`https://api.vercel.com/v6/deployments?${queryParams}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const data = await res.json();

    const deployments = data.deployments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const toDelete = deployments.slice(limitToKeep);

    for (const deploy of toDelete) {
        const del = await fetch(`https://api.vercel.com/v13/deployments/${deploy.uid}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (del.ok) {
            console.log(`Deleted: ${deploy.name} (${deploy.uid})`);
        } else {
            console.error(`Failed to delete ${deploy.uid}`);
        }
    }
}

main();
