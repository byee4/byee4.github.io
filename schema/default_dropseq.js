var default_dropseq = {
    title: "Samples",
    type: "object",
    properties: {
        assay_protocol: {
            type: "string",
            enum: [
                "SeqWell"
            ],
            description: "Leave as SeqWell unless there is an exception."
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
            default: "",
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
            description: "Intended organism of interest. Usually this corresponds to the reference genome specified below. If studying more than one species, please submit a separate manifest."
        },
        pi_name: {
            type: "string",
            default: "Gene Yeo",
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
        samples: {
            type: "array",
            format: "grid",
            title: "Samples",
            items: {
                type: "object",
                title: "Sample",
                properties: {
                    expt_id: {
                        type: "string",
                        default: "run_01"
                    },
                    library_prep: {
                        type: "string",
                        default: "PolyA select"
                    },
                    sample_id: {
                        type: "string",
                        default: "sample_01"
                    },


                    read1: {
                        type: "object",
                        title: "Fastq Read 1 File",
                        properties: {
                            path: {
                                type: "string",
                                default: "fastq_R1.fastq.gz"
                            },
                            class: {
                                type: "string",
                                enum: [
                                  "File"
                                ],
                                description: "Leave as 'File'"
                            }
                        }
                    },
                    read1_length: {
                        type: "number",
                        default: 26
                    },
                    read2: {
                        type: "object",
                        title: "Fastq Read 2 File",
                        properties: {
                            path: {
                                type: "string",
                                default: "fastq_R2.fastq.gz"
                            },
                            class: {
                                type: "string",
                                enum: [
                                  "File"
                                ],
                                description: "Leave as 'File'"
                            }
                        }
                    },
                    read2_length: {
                        type: "number",
                        default: 98
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
                    core_barcodes: {
                        type: "integer",
                        default: 2000,
                        description: "Only count cells with at least this many reads."
                    },
                    expected_barcodes: {
                        type: "integer",
                        default: 2000,
                        description: "Expected number of recovered cells."
                    },
                    species_genome_dir: {
                        type: "object",
                        title: "STAR index",
                        properties: {
                            path: {
                                type: "string",
                                enum: [
                                  "hg19_star/",
                                  "mm10_star/",
                                  "hg19mm10_star/"
                                ],
                                default: "hg19_star/"
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
                    species_reference_fasta: {
                        type: "object",
                        title: "Reference fasta",
                        properties: {
                            path: {
                                type: "string",
                                enum: [
                                  "hg19.fasta",
                                  "mm10.fasta",
                                  "hg19_mm10_transgenes.fasta"
                                ],
                                default: "hg19.fasta"
                            },
                            class: {
                                type: "string",
                                enum: [
                                  "File"
                                ],
                                description: "Leave as 'File'"
                            }
                        }
                    },
                    species_reference_refFlat: {
                        type: "object",
                        title: "refFlat file",
                        properties: {
                            path: {
                                type: "string",
                                enum: [
                                  "hg19.refFlat",
                                  "mm10.refFlat",
                                  "hg19_mm10_transgenes.refFlat"
                                ],
                                default: "hg19.refFlat"
                            },
                            class: {
                                type: "string",
                                enum: [
                                  "File"
                                ],
                                description: "Leave as 'File'"
                            }
                        }
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