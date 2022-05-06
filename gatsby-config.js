// this is a node file
module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'Frontend Masters Intro to Gatsby YAAY',
        description: 'Frontend Masters Intro to Gatsby Course Project',
        image: 'https://www.pexels.com/photo/macbook-pro-on-white-table-7583935/',

    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            // this plugin tells Gatsby where to look for Gatsby files and load into GraphQL
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts', // this is the name of the 'group' of files
                path: `${__dirname}/src/posts`,  // dirname is the current directory name, 'frontend-masters-etc.'
            }
        },
        {
            // this plugin tells Gatsby to create 'Pages' from the files found in the path and create matching pages with their own address
            // and names that match the names of the file
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/src/posts`,
            }
        },
        'gatsby-remark-images',
        {
            // transform those files from plain-text to mdx
            resolve: 'gatsby-plugin-mdx',
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1200, // maximum width on image
                        }
                    }
                ],
                defaultLayouts: {
                    posts: require.resolve('./src/components/post-layout.js'),
                    // posts is matching the name property from the gatsby-source-filesystem plugin
                    // require.resovle is a way to get the node internals to get the absolute path to a file
                },
            }, // will add options for default layout later
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: 'vnkupgyb', // gets all public data that is read only. vnkupgyb is Jason's site data
                dataset: 'production',
            }
        }

    ]
};