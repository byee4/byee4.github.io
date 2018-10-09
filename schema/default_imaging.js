var default_imaging = {
    title: "Experiment",
    type: "object",
    properties: {
        investigator: {
            type: "string",
            default: "",
            propertyOrder: 1
        },
        pi_name: {
            type: "string",
            default: "",
            propertyOrder: 2
        },
        contact_email: {
            type: "string",
            default: "",
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
            propertyOrder: 5
        },
        experiment_summary: {
            type: "string",
            default: "",
            propertyOrder: 6
        },
        experiment_type: {
            type: "string",
            enum: [
                "Stress granule",
                "Dendrite morphology",
                "Calcium imaging",
                "Other"
            ],
            propertyOrder: 7
        },
        custom_experiment_type: {
            type: "string",
            default: "",
            propertyOrder: 8
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
            propertyOrder: 9
        },
        wells_per_plate: {
            type: "integer",
            default: 96,
            propertyOrder: 10
        },
        channel_type: {
            type: "string",
            default: "",
            propertyOrder: 11
        },
        magnification_power: {
            type: "number",
            propertyOrder: 12,
            default: 1
        },
        numerical_aperature: {
            type: "number",
            default: 1.0,
            propertyOrder: 13
        },
        imaging_type: {
            type: "string",
            enum: [
                "High throughput",
                "Low throughput",
                "Confocal",
                "Other"
            ],
            propertyOrder: 14
        },
        custom_imaging_type: {
            type: "string",
            default: "",
            propertyOrder: 15
        },
        microscope: {
            type: "string",
            enum: [
                "Microscope A",
                "Microscope B",
                "Other"
            ],
            propertyOrder: 16
        },
        custom_microscope: {
            type: "string",
            default: "",
            propertyOrder: 17
        },
        imaging_and_segmentation_software: {
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
        custom_imaging_and_segmentation_software: {
            type: "string",
            default: "",
            propertyOrder: 19
        },
        imaging_and_segmentation_software_version: {
            type: "string",
            default: "",
            propertyOrder: 20
        },
        cell_growth_protocol: {
            type: "string",
            default: "",
            propertyOrder: 21
        },
        treatment_protocol_description: {
            type: "string",
            default: "",
            propertyOrder: 22
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
                        description: "Replace 'tag' with a biosource characteristic applicable to the plate, and then enter the value below. You may add multiple characteristics columns to this template.",
                        items: {
                            title: "tag",
                            type: "object",
                            properties: {
                                name: {
                                    type: "string",
                                    default: "Tag (ie. cell type)"
                                },
                                value: {
                                    type: "string",
                                    default: "Tag value (ie. ES-derived neural progenitor cells)"
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
