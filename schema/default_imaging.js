var default_imaging = {
    title: "Experiment",
    type: "object",
    layout: "select",
    properties: {
        investigator: {
            type: "string",
            default: "",
            description: "Direct contact for this experiment.",
            propertyOrder: 1,
        },
        pi_name: {
            type: "string",
            default: "",
            description: "PI or corresponding author",
            propertyOrder: 2
        },
        contact_email: {
            type: "string",
            default: "",
            description: "Direct contact email",
            propertyOrder: 3
        },
        experiment_start_date: {
            type: "string",
            propertyOrder: 4,
            format: "date",
            description: "Describe when this experiment was started."
        },
        experiment_nickname: {
            type: "string",
            default: "",
            description: "Unique, arbitrary label, will be used for lookup/search.",
            propertyOrder: 5
        },
        experiment_summary: {
            type: "string",
            default: "Short summary of experiment. (e.g. working publication title or brief overview)",
            propertyOrder: 10
        },
        experiment_type: {
            type: "string",
            enum: [
                "Stress granule",
                "Dendrite morphology",
                "Calcium imaging",
                "Cell type",
                "Synapse formation/assembly",
                "Other"
            ],
            propertyOrder: 11
        },
        custom_experiment_type: {
            type: "string",
            default: "If (Other), please describe the experiment type.",
            propertyOrder: 12
        },
        organism: {
            type: "string",
            enum: [
                "Human (HSA)",
                "Mouse (MMU)",
                "Rat (RNO)",
                "C. elegans (CEL)",
                "Barnyard (HSA+MMU)"
            ],
            propertyOrder: 13
        },
        channel_type: {
            description: "Select [None] for super resolution imaging.",
            type: "string",
            enum: [
                "Red",
                "Green",
                "Blue",
                "Far red",
                "None"
            ],
            propertyOrder: 14
        },
        numerical_aperture: {
            type: "number",
            propertyOrder: 15
        },
        imaging_type: {
            type: "string",
            enum: [
                "High throughput",
                "Low throughput",
                "Confocal",
                "Brightfield",
                "Super resolution"
            ],
            propertyOrder: 14
        },
        microscope_brand: {
            type: "string",
            enum: [
                "Nikon",
                "Olympus",
                "Leica",
                "Meiji",
                "Labomed",
                "Accu-scope",
                "Zeiss",
                "Other"
            ],
            propertyOrder: 15
        },
        microscope_model: {
            description: "If brand is 'Other', please also include the brand name here (e.g. 'Nikon, Eclipse Ti-E'), otherwise include the model (e.g. 'Eclipse Ti-E').",
            type: "string",
            propertyOrder: 16
        },
        imaging_and_segmentation_software: {
            description: "Describe the software used to generate the final processed images.",
            type: "string",
            enum: [
                "Cell Profiler",
                "Fiji",
                "Nikon Elements",
                "Metamorph",
                "Opera",
                "Operetta",
                "ImageXpress Micro Widefield",
                "In Cell Analyzer",
                "ArrayScan XTI",
                "Cellnsight NXT",
                "ArrayScan Infinity HCA Reader",
                "Other"
            ],
            propertyOrder: 18
        },
        imaging_and_segmentation_software_version: {
            description: "If software is 'Other', please also include the software name here (e.g. 'Cell Profiler, 3.1.5'), otherwise include the version (e.g. '3.1.5')",
            type: "string",
            default: "",
            propertyOrder: 19
        },
        imaging_and_segmentation_software_version: {
            type: "string",
            default: "",
            propertyOrder: 20
        },
        imaging_protocol_description: {
            type: "string",
            default: "",
            description: "Describe in freeform text the imaging (ie. cell growth) protocol. If applicable, you may reference any Pubmed IDs here.",
            propertyOrder: 21
        },
        samples: {
            type: "array",
            format: "grid",
            title: "Plates",
            items: {
                type: "object",
                title: "Plate",
                properties: {
                    plate_filename: {
                        type: "string",
                        default: "plate_01.xlsx",
                        description: "The base filename of the Excel sheet describing the plate map (you will upload this in the next step)."
                    },
                    staining: {
                        type: "string",
                        default: "",
                        description: "(ie. protein name)",
                    },
                    treatment_protocol_description: {
                        type: "string",
                        default: "",
                        description: "Describe in text the imaging protocol",
                    },
                    characteristics: {
                        type: "array",
                        format: "grid",
                        title: "Characteristics",
                        description: "Replace 'tag' with a biosource characteristic applicable to the plate, and then enter the value below. You may add multiple characteristics columns to this template.",
                        items: {
                            title: "tag",
                            type: "object",
                            properties: {
                                name: {
                                    type: "string",
                                    default: "Tag (e.g. Fixation)"
                                },
                                value: {
                                    type: "string",
                                    default: "Tag value (e.g. Methanol)"
                                }
                            }
                        }
                    }
                }
            },
            default: [
            ],
            propertyOrder: 23
        }
    }
}

var default_imaging_w_media = {
    title: "Plates",
    type: "object",
    properties: {
        experiment_type: {
            type: "string",
            default: ""
        },
        samples: {
            type: "array",
            format: "grid",
            title: "Plates",
            items: {
                type: "object",
                title: "Plate",
                properties: {
                    plate_filename: {
                        type: "string",
                        default: "plate_01.xlsx",
                        description: "The base filename of the Excel sheet describing the plate map."
                    },
                    characteristics: {
                        type: "array",
                        format: "grid",
                        title: "Characteristics",

                        items: {
                            title: "tag",
                            type: "string",
                            media: {
                                binaryEncoding: "base64",
                                type: "image/png"
                            }
                        }
                    },
                }
            },
            default: [
            ]
        }
    }
}
