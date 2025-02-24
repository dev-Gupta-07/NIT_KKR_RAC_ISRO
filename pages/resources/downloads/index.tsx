import React from 'react';
import {
    Box,
    Typography,
    Link,
    Paper,
    Grid,
    IconButton,
    Button
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Resources = () => {
    const downloads = [
        {
            title: 'Research Areas in Space (2023)',
            size: '2.9 MB',
            type: 'download',
            downloadUrl: 'https://www.isro.gov.in/media_isro/pdf/programme/Research_Areas_in_Space_for_web2023.pdf'
        },
        {
            title: 'Form A',
            subtitle: '(Biodata of Investigators)',
            type: 'word',
            downloadUrl: '/dummy-files/form-a-biodata.docx'
        },
        {
            title: 'Form B',
            subtitle: '(Project Proposal)',
            type: 'word',
            downloadUrl: '/dummy-files/form-b-proposal.docx'
        },
        {
            title: 'Main Application for Grant of Funds',
            type: 'word',
            downloadUrl: '/dummy-files/main-application.docx'
        },
        {
            title: 'Form C',
            subtitle: '(Declaration)',
            type: 'word',
            downloadUrl: '/dummy-files/form-c-declaration.docx'
        },
    ];

    const handleDownload = (url: any, fileName: any) => {
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName || url.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box sx={{ p: 4, maxWidth: 1200, margin: '0 auto' }}>
            <Typography
                variant="h3"
                component="h1"
                color="rgb(90, 146, 156)"
                gutterBottom
                sx={{ mb: 3, fontStyle: "bold", fontFamily: "serif" }}
            >
                Download Formats for Projects
            </Typography>

            <Typography paragraph sx={{ mb: 4 }}>
                Please click on the respective download button to download the recommended formats,
                which is to be signed (wherever applicable).
            </Typography>

            <Grid container spacing={3}>
                {downloads.map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Paper
                            elevation={1}
                            sx={{
                                p: 2,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Box>
                                <Typography variant="subtitle1" component="div">
                                    {item.title}
                                </Typography>
                                {item.subtitle && (
                                    <Typography variant="body2" color="text.secondary">
                                        {item.subtitle}
                                    </Typography>
                                )}
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                {(item.type === 'download' || item.type === 'both') && (
                                    <IconButton
                                        onClick={() => handleDownload(
                                            item.downloadUrl,
                                            `${item.title.toLowerCase().replace(/ /g, '-')}.pdf`
                                        )}
                                        sx={{
                                            color: "rgb(90, 146, 156)",
                                            "&:hover": { color: "rgb(70, 126, 136)" }
                                        }}
                                    >
                                        <DownloadIcon />
                                    </IconButton>
                                )}
                                {(item.type === 'word' || item.type === 'both') && (
                                    <IconButton
                                        sx={{
                                            color: "rgb(90, 146, 156)",
                                            "&:hover": { color: "rgb(70, 126, 136)" }
                                        }}
                                        onClick={() => handleDownload(
                                            item.downloadUrl,
                                            `${item.title.toLowerCase().replace(/ /g, '-')}.docx`
                                        )}
                                    >
                                        <DescriptionIcon />
                                    </IconButton>
                                )}
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Typography
                sx={{
                    mt: 4,
                    fontStyle: 'italic',
                    color: 'red'
                }}
            >
                Any project MUST include all the above four forms for a successful submission
            </Typography>
        </Box>
    );
}

export default Resources;