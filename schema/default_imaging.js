var default_imaging = {
    title: "Samples",
    type: "object",
    properties: {
        experiment_type: {
            type: "string",
            default: ""
        },
        contact_email: {
            type: "string",
            default: ""
        },
        experiment_nickname: {
            type: "string",
            default: ""
        },
        wells_per_plate: {
            type: "integer",
            default: 96
        },
        experiment_summary: {
            type: "string",
            default: ""
        },
        Channel_Type: {
            type: "string",
            default: ""
        },
        magnification_power: {
            type: "string",
            default: ""
        },
        investigator: {
            type: "string",
            default: "John Doe"
        },
        cell_growth_protocol: {
            type: "string",
            default: ""
        },
        number_of_plates: {
            type: "integer",
            default: 1
        },
        organism: {
            type: "string",
            enum: [
                "Human (HSA)",
                "Mouse (MMU)",
                "Rat (RNO)",
                "C. elegans (CEL)",
                "Barnyard (HSA+MMU)"
            ]
        },
        pi_name: {
            type: "string",
            default: "Gene Yeo"
        },
        image_capture_date: {
            type: "string",
            default: ""
        },
        microscope: {
            type: "string"
        },
        imaging_and_segmentation_software: {
            type: "string",
            default: ""
        },
        treatment_protocol_description: {
            type: "string",
            default: ""
        },
        samples: {
            type: "array",
            format: "grid",
            title: "Samples",
            items: {
                type: "object",
                title: "Sample",
                properties: {
                    sample_id: {
                        type: "string",
                        default: "sample_01"
                    },
                    characteristics: {
                        type: "array",
                        format: "grid",
                        title: "Characteristics",

                        items: {
                            title: "tag",
                            type: "object",
                            properties: {
                                name: {
                                    type: "string",
                                    default: ""
                                },
                                value: {
                                    type: "string",
                                    default: ""
                                }
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