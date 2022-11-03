bpm_process = [
  {
    container_id: "maxlife_1.0.0",
    processes: [
      {
        process_id: "com.neutrinos.manulife.maxBusiness",
        container_id: "maxlife_1.0.0",
        process_version: "1.0",
      },
      {
        process_id: "com.neutrinos.manulife.maxlifeTest",
        container_id: "maxlife_1.0.0",
        process_version: "1.0",
      },
    ],
  },
];

process_definition = [
  {
    pdid: 4,
    container_id: "string",
    process_id: "string",
    process_version: "string",
    process_name: "string",
  },
  {
    pdid: 5,
    container_id: "HT_project_1.0.0-SNAPSHOT",
    process_id: "HT_Project.HumanTask",
    process_version: "1.0",
    process_name: "HT_Approval",
  },
];

case_instance = [
  {
    ciid: 4,
    source: "string",
    case_description: "string",
    create_at: "2022-09-23T10:55:04.489Z",
    modified_at: "2022-09-23T10:55:04.489Z",
    piid: "2",
    cdid: {
      cdid: 4,
      case_type: "string",
      activate: true,
      create_at: "2022-09-23T10:55:04.489Z",
      pdid: {
        pdid: 4,
        container_id: "string",
        process_id: "string",
        process_version: "string",
        process_name: "string",
      },
    },
    pdid: {
      pdid: 5,
      container_id: "HT_project_1.0.0-SNAPSHOT",
      process_id: "HT_Project.HumanTask",
      process_version: "1.0",
      process_name: "HT_Approval",
    },
  },
];
