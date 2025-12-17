const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'posts');
const outputFile = path.join(__dirname, 'posts.json');

// Helper to parse frontmatter
function parseFrontmatter(content) {
    const match = content.match(/^---\s*([\s\S]*?)\s*---/);
    if (!match) return null;

    const frontmatterBlock = match[1];
    const metadata = {};

    frontmatterBlock.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length) {
            let value = valueParts.join(':').trim();
            // Remove quotes if present
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            }
            metadata[key.trim()] = value;
        }
    });

    return metadata;
}

try {
    if (!fs.existsSync(postsDir)) {
        console.error('Posts directory not found!');
        process.exit(1);
    }

    const files = fs.readdirSync(postsDir);
    const posts = [];

    files.forEach(file => {
        if (path.extname(file) === '.md') {
            const filePath = path.join(postsDir, file);
            const content = fs.readFileSync(filePath, 'utf-8');
            const metadata = parseFrontmatter(content);

            if (metadata) {
                // Remove frontmatter to get the actual content
                const contentWithoutFrontmatter = content.replace(/^---\s*[\s\S]*?\s*---\s*/, '').trim();
                
                // Extract first image
                const imageMatch = content.match(/!\[.*?\]\((.*?)\)/);
                const image = imageMatch ? imageMatch[1].trim() : null;

                posts.push({
                    ...metadata,
                    slug: file.replace('.md', ''),
                    filename: file,
                    image: image,
                    content: contentWithoutFrontmatter  // Include the markdown content
                });
            }
        }
    });

    // Sort by date descending
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
    console.log(`Successfully generated posts.json with ${posts.length} posts.`);

} catch (error) {
    console.error('Error generating posts index:', error);
}
