var default_cellranger = {
    title: "Samples",
    type: "object",
    properties: {
        aggr_nickname: {
            type: "string",
            default: "aggregated_01",
            description: "The eventual output directory for the aggregated output (if multisample expt, you may leave as-is for single sample expts)."
        },
        aggr_norm_method: {
            type: "string",
            default: "mapped",
            enum: [
                "mapped",
                "raw",
                "none"
            ],
            description: "See official documentation (<a href='https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/using/aggregate'>Depth Normalization</a>)"
        },
        assay_protocol: {
            type: "string",
            enum: [
                "chemV1",
                "chemV2"
            ],
            default: "chemV2",
            description: "Describe the chemistry version."
        },
        contact_email: {
            type: "string",
            default: "",
            description: "Describe point of contact for additional experimental details."
        },
        experiment_nickname: {
            type: "string",
            default: "expt_01",
            description: "Short, unique nickname that can be used to reference this experiment."
        },
        experiment_start_date: {
            type: "string",
            format: "date",
            description: "Describe when this experiment was started."
        },
        experiment_summary: {
            type: "string",
            default: "",
            description: "Thorough description of the goals and objectives of this study. The abstract from the associated publication may be suitable. Include as much text as necessary."
        },
        extract_protocol_description: {
            type: "string",
            default: "",
            description: "Describe the protocols used to extract and prepare the material to be sequenced."
        },
        growth_protocol_description: {
            type: "string",
            default: "",
            description: "Optional. Describe the conditions that were used to grow/maintain organisms or cells prior to extract preperation."
        },
        investigator: {
            type: "string",
            default: "",
            description: "Main investigator responsible for this data."
        },
        library_construction_protocol: {
            type: "string",
            default: "10X Chromium chemistry V2",
            description: "Describe the library construction protocol."
        },
        library_strategy: {
            type: "string",
            default: "scRNA-Seq",
            description: "Leave as scRNA-Seq."
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
            description: "Intended organism of interest. Usually this corresponds to the reference genome specified below."
        },
        pi_name: {
            type: "string",
            default: "",
            description: "Usually PI or corresponding author."
        },
        processing_date: {
            type: "string",
            format: "date",
            description: "Describe when this experiment was processed, typically the current date."
        },
        sequencing_center: {
            type: "string",
            default: "",
            description: "Name and secondary identifier (address or phone #) of the sequencing center or core (ie. IGM, 858-822-2754)."
        },
        sequencing_date: {
            type: "string",
            format: "date",
            description: "Describe when this experiment came back from the sequencer."
        },
        treatment_protocol_description: {
            type: "string",
            default: "",
            description: "Optional. Describe the treatments applied to the biological material prior to extract preparation."
        },
        transcriptome: {
            type: "object",
            title: "Transcriptome directory",
            properties: {
                path: {
                    type: "string",
                    enum: [
                      "refdata-cellranger-hg19-1.2.0",
                      "refdata-cellranger-ercc92-1.2.0",
                      "refdata-cellranger-GRCh38-1.2.0",
                      "refdata-cellranger-mm10-1.2.0",
                      "refdata-cellranger-hg19_and_mm10-1.2.0"
                    ],
                    default: "refdata-cellranger-hg19-1.2.0",
                    description: "Human, mice, and barnyard reference datasets. See (<a href='https://support.10xgenomics.com/single-cell-gene-expression/software/downloads/latest'>official documentation</a>)."
                },
                class: {
                    type: "string",
                    enum: [
                      "Directory"
                    ],
                    description: "Leave as 'Directory'"
                }
            }
        },
        samples: {
            type: "array",
            format: "grid",
            title: "Samples",
            items: {
                type: "object",
                title: "sample",
                properties: {
                    library_nickname: {
                        type: "string",
                        default: "sample_01",
                        description: "The eventual output directory for this single sample."
                    },
                    library_prep: {
                        type: "string",
                        default: "PolyA select",
                        description: "Leave as is, unless there is an exception."
                    },
                    sample_id: {
                        type: "string",
                        default: "",
                        description: "The prefix of the files located inside the fastq directory corresponding to the specific single sample within the fastq directory. See official documentation (<a href='https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/using/fastq-input'>--sample parameter</a>)"
                    },
                    fastq_dir: {
                        type: "object",
                        title: "Fastq directory",
                        properties: {
                            path: {
                                type: "string",
                                default: "",
                                description: "This is the name of the directory you are uploading to on AWS, INSIDE fastq_dir. See official documentation (<a href='https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/using/fastq-input'>--fastqs</a>). You will just need the toplevel name of the directory, not the full path."
                            },
                            class: {
                                type: "string",
                                enum: [
                                  "Directory"
                                ],
                                description: "Leave as 'Directory'"
                            }
                        }
                    },
                    instrument_model: {
                        type: "string",
                        default: "Illumina HiSeq 4000",
                        enum: [
                            "Illumina Genome Analyzer",
                            "Illumina Genome Analyzer II",
                            "Illumina Genome Analyzer IIx",
                            "Illumina HiSeq 2000",
                            "Illumina HiSeq 1000",
                            "Illumina HiSeq 2500",
                            "Illumina HiSeq 4000",
                            "Illumina NextSeq 500",
                            "Illumina MiSeq",
                            "AB SOLiD System",
                            "AB SOLiD System 2.0",
                            "AB SOLiD System 3.0",
                            "AB SOLiD 4 System",
                            "AB SOLiD 4hq System",
                            "AB SOLiD PI System",
                            "AB 5500xl Genetic Analyzer",
                            "AB 5500 Genetic Analyzer",
                            "454 GS",
                            "454 GS 20",
                            "454 GS FLX",
                            "454 GS Junior",
                            "454 GS FLX Titanium",
                            "Helicos HeliScope",
                            "PacBio RS",
                            "PacBio RS II",
                            "Complete Genomics",
                            "Ion Torrent PGM"
                        ]
                    },
                    read1_length: {
                        type: "number",
                        default: 26
                    },
                    read2_length: {
                        type: "number",
                        default: 98
                    },
                    expect_cells: {
                        type: "number",
                        default: 3000,
                        description: "Expected number of recovered cells. By default, 10X cellranger uses 3000."
                    },
                    characteristics: {
                        type: "array",
                        format: "grid",
                        title: "Characteristics",
                        description: "Replace 'tag' with a biosource characteristic (e.g. strain, tissue, developmental stage, tumor stage, etc), and then enter the value for each sample beneath (e.g. 129SV, brain, embryo, etc). You may add multiple characteristics columns to this template (see 'Metadata Example' spreadsheet).",
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
                    },
                }
            },
            default: [
            ]
        }
    }
}