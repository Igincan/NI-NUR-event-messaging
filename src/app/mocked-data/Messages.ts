import {Message} from "../models/message";

const messages: Message[] = [{"id":1,"type":"event","subject":"Scheduled","message":"Removal of Autologous Tissue Substitute from Left Ankle Joint, Percutaneous Approach","eventOrGroupId":98,"dateTime":"4/21/2023"},
    {"id":2,"type":"group","subject":"Canceled","message":"Inspection of Cervical Vertebral Joint, External Approach","eventOrGroupId":39,"dateTime":"2/1/2023"},
    {"id":3,"type":"event","subject":"Scheduled","message":"Restriction of Pelvis Lymphatic with Extraluminal Device, Open Approach","eventOrGroupId":71,"dateTime":"6/17/2023"},
    {"id":4,"type":"group","subject":"Scheduled","message":"Drainage of Right Femoral Region, Percutaneous Endoscopic Approach, Diagnostic","eventOrGroupId":11,"dateTime":"12/22/2022"},
    {"id":5,"type":"group","subject":"Scheduled","message":"Insertion of Internal Fixation Device into Lumbar Vertebra, Percutaneous Approach","eventOrGroupId":50,"dateTime":"12/17/2022"},
    {"id":6,"type":"group","subject":"Scheduled","message":"Drainage of Left Ovary, Open Approach","eventOrGroupId":86,"dateTime":"3/2/2023"},
    {"id":7,"type":"group","subject":"Scheduled","message":"Repair Cardiovascular System in Products of Conception, Percutaneous Approach","eventOrGroupId":64,"dateTime":"7/24/2023"},
    {"id":8,"type":"group","subject":"Scheduled","message":"Destruction of Right Acromioclavicular Joint, Percutaneous Endoscopic Approach","eventOrGroupId":97,"dateTime":"8/3/2023"},
    {"id":9,"type":"group","subject":"Canceled","message":"Destruction of Hemiazygos Vein, Percutaneous Approach","eventOrGroupId":55,"dateTime":"12/6/2022"},
    {"id":10,"type":"group","subject":"Scheduled","message":"Reposition Right Fibula with Ring External Fixation Device, Open Approach","eventOrGroupId":47,"dateTime":"2/9/2023"},
    {"id":11,"type":"group","subject":"Canceled","message":"Division of Left Foot Bursa and Ligament, Percutaneous Endoscopic Approach","eventOrGroupId":71,"dateTime":"7/26/2023"},
    {"id":12,"type":"event","subject":"Scheduled","message":"Supplement Right Lesser Saphenous Vein with Nonautologous Tissue Substitute, Open Approach","eventOrGroupId":31,"dateTime":"11/8/2022"},
    {"id":13,"type":"group","subject":"Scheduled","message":"Extirpation of Matter from Right Ethmoid Bone, Percutaneous Endoscopic Approach","eventOrGroupId":33,"dateTime":"7/8/2023"},
    {"id":14,"type":"event","subject":"Canceled","message":"Drainage of Chest Subcutaneous Tissue and Fascia, Percutaneous Approach","eventOrGroupId":45,"dateTime":"9/28/2023"},
    {"id":15,"type":"group","subject":"Canceled","message":"Replacement of Left Internal Carotid Artery with Autologous Tissue Substitute, Open Approach","eventOrGroupId":15,"dateTime":"4/11/2023"},
    {"id":16,"type":"group","subject":"Scheduled","message":"Excision of Left Tarsal, Percutaneous Endoscopic Approach, Diagnostic","eventOrGroupId":99,"dateTime":"6/26/2023"},
    {"id":17,"type":"event","subject":"Scheduled","message":"Removal of Autologous Tissue Substitute from Right Acromioclavicular Joint, Open Approach","eventOrGroupId":41,"dateTime":"9/27/2023"},
    {"id":18,"type":"group","subject":"Scheduled","message":"Bypass Left Kidney Pelvis to Colon with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach","eventOrGroupId":40,"dateTime":"11/7/2022"},
    {"id":19,"type":"event","subject":"Canceled","message":"Drainage of Adenoids, Open Approach","eventOrGroupId":91,"dateTime":"6/3/2023"},
    {"id":20,"type":"event","subject":"Scheduled","message":"Destruction of Right Temporal Bone, Open Approach","eventOrGroupId":26,"dateTime":"8/28/2023"},
    {"id":21,"type":"event","subject":"Canceled","message":"Revision of Infusion Device in Ureter, Via Natural or Artificial Opening","eventOrGroupId":84,"dateTime":"3/27/2023"},
    {"id":22,"type":"event","subject":"Canceled","message":"Bypass Right Subclavian Artery to Right Pulmonary Artery with Synthetic Substitute, Open Approach","eventOrGroupId":88,"dateTime":"7/17/2023"},
    {"id":23,"type":"group","subject":"Scheduled","message":"Dilation of Right Common Carotid Artery, Bifurcation, with Four or More Drug-eluting Intraluminal Devices, Open Approach","eventOrGroupId":58,"dateTime":"4/16/2023"},
    {"id":24,"type":"group","subject":"Canceled","message":"Beam Radiation of Uterus using Neutron Capture","eventOrGroupId":48,"dateTime":"10/28/2023"},
    {"id":25,"type":"group","subject":"Scheduled","message":"Drainage of Left Scapula, Percutaneous Endoscopic Approach, Diagnostic","eventOrGroupId":12,"dateTime":"10/18/2023"},
    {"id":26,"type":"event","subject":"Scheduled","message":"Drainage of Left Sublingual Gland, Open Approach, Diagnostic","eventOrGroupId":93,"dateTime":"3/30/2023"},
    {"id":27,"type":"event","subject":"Canceled","message":"Division of Upper Extremity Subcutaneous Tissue and Fascia, Open Approach","eventOrGroupId":97,"dateTime":"8/1/2023"},
    {"id":28,"type":"group","subject":"Scheduled","message":"Removal of Infusion Device from Right Shoulder Joint, External Approach","eventOrGroupId":67,"dateTime":"3/7/2023"},
    {"id":29,"type":"group","subject":"Canceled","message":"Insertion of Monoplanar External Fixation Device into Left Radius, Open Approach","eventOrGroupId":52,"dateTime":"10/31/2022"},
    {"id":30,"type":"group","subject":"Canceled","message":"Repair Finger Nail, External Approach","eventOrGroupId":45,"dateTime":"5/21/2023"},
    {"id":31,"type":"event","subject":"Canceled","message":"Revision of External Fixation Device in Right Toe Phalangeal Joint, Percutaneous Endoscopic Approach","eventOrGroupId":70,"dateTime":"7/10/2023"},
    {"id":32,"type":"event","subject":"Canceled","message":"Extraction of Endometrium, Via Natural or Artificial Opening Endoscopic","eventOrGroupId":69,"dateTime":"5/23/2023"},
    {"id":33,"type":"group","subject":"Canceled","message":"Drainage of Left Upper Extremity Lymphatic with Drainage Device, Percutaneous Approach","eventOrGroupId":27,"dateTime":"12/30/2022"},
    {"id":34,"type":"group","subject":"Scheduled","message":"Fragmentation in Ileum, Via Natural or Artificial Opening","eventOrGroupId":55,"dateTime":"1/22/2023"},
    {"id":35,"type":"event","subject":"Canceled","message":"Revision of Autologous Tissue Substitute in Peritoneum, Percutaneous Approach","eventOrGroupId":79,"dateTime":"10/21/2023"},
    {"id":36,"type":"group","subject":"Scheduled","message":"Drainage of Left Frontal Bone, Percutaneous Endoscopic Approach, Diagnostic","eventOrGroupId":86,"dateTime":"9/17/2023"},
    {"id":37,"type":"group","subject":"Canceled","message":"Revision of Nonautologous Tissue Substitute in Sacrum, External Approach","eventOrGroupId":62,"dateTime":"6/21/2023"},
    {"id":38,"type":"group","subject":"Scheduled","message":"Reposition Left Metacarpophalangeal Joint with Internal Fixation Device, External Approach","eventOrGroupId":72,"dateTime":"10/15/2023"},
    {"id":39,"type":"event","subject":"Scheduled","message":"Removal of Synthetic Substitute from Sacrum, Percutaneous Approach","eventOrGroupId":24,"dateTime":"5/7/2023"},
    {"id":40,"type":"event","subject":"Canceled","message":"Repair Right Submaxillary Gland, Open Approach","eventOrGroupId":28,"dateTime":"9/17/2023"},
    {"id":41,"type":"group","subject":"Canceled","message":"Excision of Right Nipple, External Approach, Diagnostic","eventOrGroupId":3,"dateTime":"12/23/2022"},
    {"id":42,"type":"group","subject":"Scheduled","message":"Extirpation of Matter from Right Inferior Parathyroid Gland, Percutaneous Endoscopic Approach","eventOrGroupId":91,"dateTime":"4/20/2023"},
    {"id":43,"type":"group","subject":"Scheduled","message":"Excision of Left Breast, External Approach, Diagnostic","eventOrGroupId":20,"dateTime":"11/20/2022"},
    {"id":44,"type":"group","subject":"Scheduled","message":"Excision of Cystic Duct, Percutaneous Approach, Diagnostic","eventOrGroupId":22,"dateTime":"1/27/2023"},
    {"id":45,"type":"event","subject":"Scheduled","message":"Release Left Internal Mammary Lymphatic, Open Approach","eventOrGroupId":65,"dateTime":"7/17/2023"},
    {"id":46,"type":"event","subject":"Canceled","message":"Bypass Right Common Iliac Artery to Bilateral Femoral Arteries with Nonautologous Tissue Substitute, Open Approach","eventOrGroupId":90,"dateTime":"8/14/2023"},
    {"id":47,"type":"group","subject":"Canceled","message":"Release Sacral Nerve, Open Approach","eventOrGroupId":58,"dateTime":"4/9/2023"},
    {"id":48,"type":"event","subject":"Canceled","message":"Replacement of Left Atrium with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach","eventOrGroupId":4,"dateTime":"1/1/2023"},
    {"id":49,"type":"group","subject":"Canceled","message":"Fluoroscopy of Right Temporomandibular Joint using Other Contrast","eventOrGroupId":20,"dateTime":"7/8/2023"},
    {"id":50,"type":"event","subject":"Scheduled","message":"Excision of Left Abdomen Tendon, Percutaneous Approach, Diagnostic","eventOrGroupId":55,"dateTime":"5/22/2023"},
    {"id":51,"type":"group","subject":"Scheduled","message":"Removal of Spacer from Occipital-cervical Joint, Percutaneous Endoscopic Approach","eventOrGroupId":5,"dateTime":"8/2/2023"},
    {"id":52,"type":"group","subject":"Canceled","message":"Occlusion of Right Peroneal Artery with Intraluminal Device, Percutaneous Approach","eventOrGroupId":25,"dateTime":"9/24/2023"},
    {"id":53,"type":"event","subject":"Scheduled","message":"Replacement of Right Lacrimal Bone with Synthetic Substitute, Percutaneous Endoscopic Approach","eventOrGroupId":78,"dateTime":"7/14/2023"},
    {"id":54,"type":"event","subject":"Scheduled","message":"Dilation of Right Main Bronchus, Percutaneous Approach","eventOrGroupId":95,"dateTime":"7/29/2023"},
    {"id":55,"type":"event","subject":"Canceled","message":"Drainage of Right Palatine Bone with Drainage Device, Percutaneous Approach","eventOrGroupId":49,"dateTime":"3/8/2023"},
    {"id":56,"type":"group","subject":"Scheduled","message":"Removal of Infusion Device from Thoracic Vertebral Joint, Open Approach","eventOrGroupId":37,"dateTime":"7/19/2023"},
    {"id":57,"type":"group","subject":"Scheduled","message":"Introduction of Antiarrhythmic into Peripheral Artery, Open Approach","eventOrGroupId":16,"dateTime":"11/24/2022"},
    {"id":58,"type":"event","subject":"Scheduled","message":"Beam Radiation of Rib(s) using Photons 1 - 10 MeV","eventOrGroupId":14,"dateTime":"6/14/2023"},
    {"id":59,"type":"group","subject":"Scheduled","message":"Measurement of Arterial Pressure, Peripheral, Open Approach","eventOrGroupId":7,"dateTime":"12/28/2022"},
    {"id":60,"type":"group","subject":"Canceled","message":"Introduction of Serum, Toxoid and Vaccine into Mouth and Pharynx, External Approach","eventOrGroupId":54,"dateTime":"8/8/2023"},
    {"id":61,"type":"event","subject":"Canceled","message":"Contact Radiation of Mouth","eventOrGroupId":67,"dateTime":"8/11/2023"},
    {"id":62,"type":"event","subject":"Canceled","message":"Drainage of Scrotum with Drainage Device, Percutaneous Endoscopic Approach","eventOrGroupId":76,"dateTime":"8/20/2023"},
    {"id":63,"type":"event","subject":"Canceled","message":"Bypass Left Pulmonary Artery from Subclavian with No Device, Open Approach","eventOrGroupId":17,"dateTime":"11/21/2022"},
    {"id":64,"type":"event","subject":"Canceled","message":"Restriction of Right External Iliac Vein with Extraluminal Device, Open Approach","eventOrGroupId":95,"dateTime":"4/1/2023"},
    {"id":65,"type":"event","subject":"Canceled","message":"Beam Radiation of Pelvis Lymphatics using Photons >10 MeV","eventOrGroupId":48,"dateTime":"9/29/2023"},
    {"id":66,"type":"event","subject":"Canceled","message":"Drainage of Upper Tooth, Open Approach, Single","eventOrGroupId":48,"dateTime":"4/7/2023"},
    {"id":67,"type":"group","subject":"Canceled","message":"Drainage of Rectum with Drainage Device, Via Natural or Artificial Opening","eventOrGroupId":1,"dateTime":"1/17/2023"},
    {"id":68,"type":"event","subject":"Scheduled","message":"Removal of Internal Fixation Device from Right Sternoclavicular Joint, Percutaneous Approach","eventOrGroupId":21,"dateTime":"10/6/2023"},
    {"id":69,"type":"event","subject":"Canceled","message":"Occlusion of Left Uterine Artery with Intraluminal Device, Open Approach","eventOrGroupId":12,"dateTime":"1/18/2023"},
    {"id":70,"type":"group","subject":"Scheduled","message":"Drainage of Left Eustachian Tube, Via Natural or Artificial Opening Endoscopic","eventOrGroupId":60,"dateTime":"5/25/2023"},
    {"id":71,"type":"group","subject":"Scheduled","message":"Extirpation of Matter from Left Diaphragm, Percutaneous Endoscopic Approach","eventOrGroupId":76,"dateTime":"1/24/2023"},
    {"id":72,"type":"group","subject":"Canceled","message":"Control Bleeding in Left Buttock, Open Approach","eventOrGroupId":43,"dateTime":"11/20/2022"},
    {"id":73,"type":"event","subject":"Canceled","message":"Drainage of Cerebral Meninges, Percutaneous Approach, Diagnostic","eventOrGroupId":34,"dateTime":"6/27/2023"},
    {"id":74,"type":"group","subject":"Scheduled","message":"Removal of Synthetic Substitute from Cervicothoracic Vertebral Joint, Percutaneous Approach","eventOrGroupId":78,"dateTime":"1/16/2023"},
    {"id":75,"type":"event","subject":"Canceled","message":"Occlusion of Right Axillary Lymphatic with Extraluminal Device, Percutaneous Endoscopic Approach","eventOrGroupId":30,"dateTime":"8/3/2023"},
    {"id":76,"type":"group","subject":"Scheduled","message":"Supplement Facial Muscle with Synthetic Substitute, Percutaneous Endoscopic Approach","eventOrGroupId":19,"dateTime":"10/13/2023"},
    {"id":77,"type":"event","subject":"Scheduled","message":"Removal of Autologous Tissue Substitute from Thoracic Duct, Open Approach","eventOrGroupId":90,"dateTime":"6/7/2023"},
    {"id":78,"type":"event","subject":"Scheduled","message":"Replacement of Neck Skin with Synthetic Substitute, Full Thickness, External Approach","eventOrGroupId":15,"dateTime":"9/29/2023"},
    {"id":79,"type":"group","subject":"Canceled","message":"Bypass Right Common Iliac Artery to Celiac Artery with Autologous Venous Tissue, Open Approach","eventOrGroupId":26,"dateTime":"10/7/2023"},
    {"id":80,"type":"group","subject":"Canceled","message":"Release Left Trunk Muscle, Percutaneous Approach","eventOrGroupId":68,"dateTime":"3/26/2023"},
    {"id":81,"type":"group","subject":"Scheduled","message":"Excision of Bilateral Breast, Percutaneous Approach","eventOrGroupId":78,"dateTime":"6/3/2023"},
    {"id":82,"type":"event","subject":"Scheduled","message":"Alteration of Male Perineum, Percutaneous Approach","eventOrGroupId":35,"dateTime":"12/9/2022"},
    {"id":83,"type":"group","subject":"Canceled","message":"Extraction of Left Abdomen Bursa and Ligament, Open Approach","eventOrGroupId":72,"dateTime":"2/21/2023"},
    {"id":84,"type":"event","subject":"Canceled","message":"Stereotactic Gamma Beam Radiosurgery of Brain Stem","eventOrGroupId":30,"dateTime":"6/8/2023"},
    {"id":85,"type":"group","subject":"Canceled","message":"Control Bleeding in Left Pleural Cavity, Percutaneous Endoscopic Approach","eventOrGroupId":91,"dateTime":"2/11/2023"},
    {"id":86,"type":"event","subject":"Scheduled","message":"Change Traction Apparatus on Neck","eventOrGroupId":64,"dateTime":"1/29/2023"},
    {"id":87,"type":"event","subject":"Canceled","message":"Removal of Infusion Device from Tracheobronchial Tree, External Approach","eventOrGroupId":9,"dateTime":"3/9/2023"},
    {"id":88,"type":"group","subject":"Canceled","message":"Introduction of Pigment into Skin and Mucous Membranes, External Approach","eventOrGroupId":63,"dateTime":"11/23/2022"},
    {"id":89,"type":"group","subject":"Canceled","message":"Repair Right Thyroid Artery, Percutaneous Approach","eventOrGroupId":35,"dateTime":"4/19/2023"},
    {"id":90,"type":"group","subject":"Scheduled","message":"Restriction of Left Renal Vein with Intraluminal Device, Open Approach","eventOrGroupId":12,"dateTime":"1/21/2023"},
    {"id":91,"type":"event","subject":"Scheduled","message":"Therapeutic Exercise Treatment of Respiratory System - Head and Neck using Orthosis","eventOrGroupId":54,"dateTime":"12/5/2022"},
    {"id":92,"type":"group","subject":"Canceled","message":"Excision of Left Ethmoid Sinus, Percutaneous Approach, Diagnostic","eventOrGroupId":91,"dateTime":"6/3/2023"},
    {"id":93,"type":"group","subject":"Scheduled","message":"Replacement of Lower Lip with Autologous Tissue Substitute, Percutaneous Approach","eventOrGroupId":47,"dateTime":"5/25/2023"},
    {"id":94,"type":"group","subject":"Canceled","message":"Destruction of Right Upper Lung Lobe, Percutaneous Approach","eventOrGroupId":31,"dateTime":"12/26/2022"},
    {"id":95,"type":"event","subject":"Scheduled","message":"Excision of Radial Nerve, Percutaneous Approach","eventOrGroupId":44,"dateTime":"10/28/2023"},
    {"id":96,"type":"group","subject":"Canceled","message":"Inspection of Right Lower Extremity, Percutaneous Endoscopic Approach","eventOrGroupId":81,"dateTime":"11/4/2022"},
    {"id":97,"type":"group","subject":"Scheduled","message":"Occlusion of Ascending Colon, Percutaneous Approach","eventOrGroupId":78,"dateTime":"11/29/2022"},
    {"id":98,"type":"event","subject":"Canceled","message":"Release Anterior Neck Subcutaneous Tissue and Fascia, External Approach","eventOrGroupId":25,"dateTime":"4/11/2023"},
    {"id":99,"type":"event","subject":"Scheduled","message":"Occlusion of Right Ulnar Artery with Intraluminal Device, Open Approach","eventOrGroupId":4,"dateTime":"3/26/2023"},
    {"id":100,"type":"event","subject":"Canceled","message":"Insertion of External Fixation Device into Right Toe Phalanx, Percutaneous Endoscopic Approach","eventOrGroupId":76,"dateTime":"3/18/2023"},
    {"id":101,"type":"event","subject":"Canceled","message":"Drainage of Right Toe Phalangeal Joint, Open Approach, Diagnostic","eventOrGroupId":100,"dateTime":"1/3/2023"},
    {"id":102,"type":"event","subject":"Scheduled","message":"Manual Therapy Techniques Treatment of Musculoskeletal System - Head and Neck","eventOrGroupId":92,"dateTime":"3/22/2023"},
    {"id":103,"type":"group","subject":"Canceled","message":"Revision of Monitoring Device in Azygos Vein, Percutaneous Endoscopic Approach","eventOrGroupId":5,"dateTime":"5/11/2023"},
    {"id":104,"type":"event","subject":"Canceled","message":"Dilation of Hepatic Artery, Bifurcation, with Three Intraluminal Devices, Open Approach","eventOrGroupId":60,"dateTime":"7/18/2023"},
    {"id":105,"type":"group","subject":"Canceled","message":"Supplement Cervical Vertebral Joint with Autologous Tissue Substitute, Percutaneous Approach","eventOrGroupId":39,"dateTime":"4/14/2023"},
    {"id":106,"type":"event","subject":"Scheduled","message":"Dilation of Upper Artery with Three Intraluminal Devices, Open Approach","eventOrGroupId":30,"dateTime":"8/23/2023"},
    {"id":107,"type":"group","subject":"Canceled","message":"Upper Bones, Extirpation","eventOrGroupId":94,"dateTime":"4/1/2023"},
    {"id":108,"type":"group","subject":"Canceled","message":"Dilation of Carina with Intraluminal Device, Via Natural or Artificial Opening Endoscopic","eventOrGroupId":16,"dateTime":"8/3/2023"},
    {"id":109,"type":"event","subject":"Scheduled","message":"Plain Radiography of Right Renal Artery using High Osmolar Contrast","eventOrGroupId":79,"dateTime":"5/2/2023"},
    {"id":110,"type":"group","subject":"Scheduled","message":"Replacement of Buttock Skin with Nonautologous Tissue Substitute, Full Thickness, External Approach","eventOrGroupId":66,"dateTime":"7/31/2023"},
    {"id":111,"type":"group","subject":"Scheduled","message":"Removal of Synthetic Substitute from Right Wrist Joint, Percutaneous Approach","eventOrGroupId":98,"dateTime":"2/24/2023"},
    {"id":112,"type":"event","subject":"Canceled","message":"Restriction of Left External Iliac Artery with Intraluminal Device, Percutaneous Approach","eventOrGroupId":44,"dateTime":"9/20/2023"},
    {"id":113,"type":"event","subject":"Scheduled","message":"Dilation of Gastric Artery with Four or More Drug-eluting Intraluminal Devices, Percutaneous Approach","eventOrGroupId":23,"dateTime":"5/11/2023"},
    {"id":114,"type":"group","subject":"Scheduled","message":"Supplement Aortic Lymphatic with Synthetic Substitute, Open Approach","eventOrGroupId":84,"dateTime":"5/27/2023"},
    {"id":115,"type":"group","subject":"Canceled","message":"Insertion of Monoplanar External Fixation Device into Right Ulna, Percutaneous Approach","eventOrGroupId":47,"dateTime":"8/7/2023"},
    {"id":116,"type":"group","subject":"Scheduled","message":"Excision of Left Lacrimal Bone, Percutaneous Approach, Diagnostic","eventOrGroupId":13,"dateTime":"7/3/2023"},
    {"id":117,"type":"event","subject":"Canceled","message":"Removal of Synthetic Substitute from Diaphragm, Percutaneous Endoscopic Approach","eventOrGroupId":67,"dateTime":"2/14/2023"},
    {"id":118,"type":"group","subject":"Scheduled","message":"Revision of Autologous Tissue Substitute in Lumbosacral Joint, Percutaneous Approach","eventOrGroupId":48,"dateTime":"4/12/2023"},
    {"id":119,"type":"event","subject":"Canceled","message":"Fluoroscopy of Thoracolumbar Joint using Low Osmolar Contrast","eventOrGroupId":76,"dateTime":"9/16/2023"},
    {"id":120,"type":"event","subject":"Canceled","message":"Release Left Thorax Tendon, Open Approach","eventOrGroupId":61,"dateTime":"3/3/2023"},
    {"id":121,"type":"event","subject":"Canceled","message":"Repair Left Tarsal, Open Approach","eventOrGroupId":69,"dateTime":"7/20/2023"},
    {"id":122,"type":"group","subject":"Canceled","message":"Bypass Abdominal Aorta to Left Internal Iliac Artery with Autologous Arterial Tissue, Open Approach","eventOrGroupId":60,"dateTime":"8/21/2023"},
    {"id":123,"type":"group","subject":"Canceled","message":"Release Upper Lip, Percutaneous Approach","eventOrGroupId":64,"dateTime":"6/19/2023"},
    {"id":124,"type":"event","subject":"Scheduled","message":"Reposition Left Carpal with External Fixation Device, Percutaneous Endoscopic Approach","eventOrGroupId":55,"dateTime":"7/14/2023"},
    {"id":125,"type":"group","subject":"Scheduled","message":"Insertion of Internal Fixation Device into Right Tibia, Percutaneous Endoscopic Approach","eventOrGroupId":11,"dateTime":"12/22/2022"},
    {"id":126,"type":"event","subject":"Canceled","message":"Insertion of Pedicle-Based Spinal Stabilization Device into Cervicothoracic Vertebral Joint, Percutaneous Endoscopic Approach","eventOrGroupId":77,"dateTime":"4/8/2023"},
    {"id":127,"type":"event","subject":"Canceled","message":"Removal of Drainage Device from Face, External Approach","eventOrGroupId":100,"dateTime":"1/8/2023"},
    {"id":128,"type":"group","subject":"Scheduled","message":"Reposition Left Pulmonary Artery, Open Approach","eventOrGroupId":53,"dateTime":"5/28/2023"},
    {"id":129,"type":"group","subject":"Canceled","message":"Drainage of Right Axilla with Drainage Device, Open Approach","eventOrGroupId":78,"dateTime":"6/10/2023"},
    {"id":130,"type":"group","subject":"Scheduled","message":"Removal of Autologous Tissue Substitute from Ureter, Via Natural or Artificial Opening Endoscopic","eventOrGroupId":33,"dateTime":"5/23/2023"},
    {"id":131,"type":"group","subject":"Canceled","message":"Fusion of Thoracolumbar Vertebral Joint with Autologous Tissue Substitute, Posterior Approach, Anterior Column, Open Approach","eventOrGroupId":26,"dateTime":"12/9/2022"},
    {"id":132,"type":"group","subject":"Canceled","message":"Introduction of Nutritional Substance into Products of Conception, Via Natural or Artificial Opening","eventOrGroupId":97,"dateTime":"11/5/2022"},
    {"id":133,"type":"group","subject":"Canceled","message":"Supplement Aortic Valve with Autologous Tissue Substitute, Open Approach","eventOrGroupId":26,"dateTime":"5/2/2023"},
    {"id":134,"type":"group","subject":"Canceled","message":"Bypass Ascending Colon to Cutaneous with Synthetic Substitute, Percutaneous Endoscopic Approach","eventOrGroupId":34,"dateTime":"11/28/2022"},
    {"id":135,"type":"group","subject":"Scheduled","message":"Removal of Autologous Tissue Substitute from Fallopian Tube, Via Natural or Artificial Opening","eventOrGroupId":73,"dateTime":"4/12/2023"},
    {"id":136,"type":"event","subject":"Canceled","message":"Dilation of Right Internal Iliac Artery with Three Intraluminal Devices, Percutaneous Endoscopic Approach","eventOrGroupId":18,"dateTime":"12/21/2022"},
    {"id":137,"type":"group","subject":"Scheduled","message":"Removal of Radioactive Element from Uterus and Cervix, Percutaneous Approach","eventOrGroupId":92,"dateTime":"8/15/2023"},
    {"id":138,"type":"event","subject":"Canceled","message":"Drainage of Right Middle Lobe Bronchus, Via Natural or Artificial Opening, Diagnostic","eventOrGroupId":29,"dateTime":"12/18/2022"},
    {"id":139,"type":"group","subject":"Canceled","message":"Insertion of Radioactive Element into Left Wrist Region, Open Approach","eventOrGroupId":19,"dateTime":"11/18/2022"},
    {"id":140,"type":"group","subject":"Canceled","message":"Bypass Middle Esophagus to Jejunum with Autologous Tissue Substitute, Percutaneous Endoscopic Approach","eventOrGroupId":80,"dateTime":"3/20/2023"},
    {"id":141,"type":"group","subject":"Scheduled","message":"Range of Motion and Joint Integrity Assessment of Musculoskeletal System - Whole Body using Other Equipment","eventOrGroupId":11,"dateTime":"9/17/2023"},
    {"id":142,"type":"group","subject":"Scheduled","message":"Restriction of Left Cephalic Vein, Percutaneous Approach","eventOrGroupId":47,"dateTime":"10/31/2022"},
    {"id":143,"type":"event","subject":"Scheduled","message":"Restriction of Middle Colic Artery, Percutaneous Approach","eventOrGroupId":71,"dateTime":"3/6/2023"},
    {"id":144,"type":"group","subject":"Scheduled","message":"Drainage of Left Upper Eyelid, Percutaneous Approach, Diagnostic","eventOrGroupId":32,"dateTime":"6/14/2023"},
    {"id":145,"type":"group","subject":"Scheduled","message":"Drainage of Left Kidney Pelvis, Percutaneous Approach, Diagnostic","eventOrGroupId":33,"dateTime":"5/31/2023"},
    {"id":146,"type":"group","subject":"Scheduled","message":"Monitoring of Arterial Pulse, Pulmonary, Percutaneous Approach","eventOrGroupId":35,"dateTime":"8/4/2023"},
    {"id":147,"type":"group","subject":"Canceled","message":"Release Left Ankle Joint, External Approach","eventOrGroupId":30,"dateTime":"1/7/2023"},
    {"id":148,"type":"group","subject":"Scheduled","message":"Replacement of Right Femoral Shaft with Synthetic Substitute, Open Approach","eventOrGroupId":22,"dateTime":"1/28/2023"},
    {"id":149,"type":"group","subject":"Scheduled","message":"Destruction of Conduction Mechanism, Open Approach","eventOrGroupId":92,"dateTime":"3/1/2023"},
    {"id":150,"type":"event","subject":"Scheduled","message":"Removal of Internal Fixation Device from Thoracic Vertebral Joint, External Approach","eventOrGroupId":35,"dateTime":"1/4/2023"},
    {"id":151,"type":"event","subject":"Scheduled","message":"Reattachment of Left Ureter, Percutaneous Endoscopic Approach","eventOrGroupId":87,"dateTime":"6/18/2023"},
    {"id":152,"type":"event","subject":"Scheduled","message":"Revision of Synthetic Substitute in Right Finger Phalangeal Joint, Percutaneous Endoscopic Approach","eventOrGroupId":25,"dateTime":"4/12/2023"},
    {"id":153,"type":"group","subject":"Canceled","message":"Restriction of Esophagus with Extraluminal Device, Percutaneous Endoscopic Approach","eventOrGroupId":49,"dateTime":"12/16/2022"},
    {"id":154,"type":"event","subject":"Canceled","message":"Division of Left Foot Muscle, Percutaneous Endoscopic Approach","eventOrGroupId":33,"dateTime":"5/2/2023"},
    {"id":155,"type":"group","subject":"Scheduled","message":"Destruction of Left Femoral Artery, Percutaneous Endoscopic Approach","eventOrGroupId":96,"dateTime":"10/19/2023"},
    {"id":156,"type":"event","subject":"Canceled","message":"Release Stomach, Pylorus, Percutaneous Approach","eventOrGroupId":6,"dateTime":"3/26/2023"},
    {"id":157,"type":"event","subject":"Scheduled","message":"Drainage of Upper Esophagus with Drainage Device, Percutaneous Approach","eventOrGroupId":67,"dateTime":"1/13/2023"},
    {"id":158,"type":"group","subject":"Scheduled","message":"Magnetic Resonance Imaging (MRI) of Bilateral Renal Arteries using Other Contrast","eventOrGroupId":46,"dateTime":"5/23/2023"},
    {"id":159,"type":"event","subject":"Scheduled","message":"Reposition Left Popliteal Artery, Open Approach","eventOrGroupId":37,"dateTime":"10/4/2023"},
    {"id":160,"type":"group","subject":"Canceled","message":"Reposition Left Metatarsal-Phalangeal Joint with Internal Fixation Device, Percutaneous Endoscopic Approach","eventOrGroupId":68,"dateTime":"6/30/2023"},
    {"id":161,"type":"group","subject":"Canceled","message":"Extirpation of Matter from Right Eustachian Tube, Percutaneous Endoscopic Approach","eventOrGroupId":52,"dateTime":"8/23/2023"},
    {"id":162,"type":"event","subject":"Canceled","message":"Reposition Right Femoral Shaft with Intramedullary Internal Fixation Device, Percutaneous Approach","eventOrGroupId":69,"dateTime":"11/30/2022"},
    {"id":163,"type":"event","subject":"Scheduled","message":"Removal of Autologous Tissue Substitute from Left Elbow Joint, Percutaneous Endoscopic Approach","eventOrGroupId":52,"dateTime":"6/5/2023"},
    {"id":164,"type":"group","subject":"Scheduled","message":"Nonimaging Nuclear Medicine Probe of Abdomen and Pelvis using Indium 111 (In-111)","eventOrGroupId":35,"dateTime":"5/20/2023"},
    {"id":165,"type":"group","subject":"Scheduled","message":"Transfer Right Abdomen Muscle, Open Approach","eventOrGroupId":99,"dateTime":"6/27/2023"},
    {"id":166,"type":"group","subject":"Scheduled","message":"Inspection of Nasal Bone, Percutaneous Approach","eventOrGroupId":9,"dateTime":"12/24/2022"},
    {"id":167,"type":"group","subject":"Scheduled","message":"Excision of Left Lung, Percutaneous Endoscopic Approach, Diagnostic","eventOrGroupId":36,"dateTime":"1/18/2023"},
    {"id":168,"type":"group","subject":"Scheduled","message":"Bypass Right Kidney Pelvis to Ileum, Percutaneous Endoscopic Approach","eventOrGroupId":73,"dateTime":"6/13/2023"},
    {"id":169,"type":"event","subject":"Scheduled","message":"Insertion of External Fixation Device into Right Lower Femur, Percutaneous Approach","eventOrGroupId":100,"dateTime":"10/4/2023"},
    {"id":170,"type":"event","subject":"Scheduled","message":"Supplement Right Hypogastric Vein with Synthetic Substitute, Percutaneous Endoscopic Approach","eventOrGroupId":85,"dateTime":"5/28/2023"},
    {"id":171,"type":"group","subject":"Canceled","message":"Supplement Right External Jugular Vein with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach","eventOrGroupId":68,"dateTime":"12/25/2022"},
    {"id":172,"type":"event","subject":"Scheduled","message":"Caregiver Training in Grooming/Personal Hygiene using Prosthesis","eventOrGroupId":83,"dateTime":"3/22/2023"},
    {"id":173,"type":"group","subject":"Scheduled","message":"Excision of Left Lower Lung Lobe, Percutaneous Approach, Diagnostic","eventOrGroupId":98,"dateTime":"6/15/2023"},
    {"id":174,"type":"event","subject":"Scheduled","message":"Supplement Upper Back with Synthetic Substitute, Percutaneous Endoscopic Approach","eventOrGroupId":12,"dateTime":"3/8/2023"},
    {"id":175,"type":"event","subject":"Scheduled","message":"Drainage of Left Foot Tendon with Drainage Device, Percutaneous Approach","eventOrGroupId":37,"dateTime":"3/5/2023"},
    {"id":176,"type":"group","subject":"Scheduled","message":"Drainage of Left Sacroiliac Joint, Open Approach, Diagnostic","eventOrGroupId":26,"dateTime":"4/4/2023"},
    {"id":177,"type":"event","subject":"Scheduled","message":"Revision of Internal Fixation Device in Right Clavicle, Open Approach","eventOrGroupId":36,"dateTime":"10/2/2023"},
    {"id":178,"type":"event","subject":"Scheduled","message":"Repair Right Diaphragm, Percutaneous Approach","eventOrGroupId":39,"dateTime":"2/2/2023"},
    {"id":179,"type":"group","subject":"Canceled","message":"Extirpation of Matter from Left Hand Subcutaneous Tissue and Fascia, Open Approach","eventOrGroupId":47,"dateTime":"1/15/2023"},
    {"id":180,"type":"group","subject":"Scheduled","message":"Extirpation of Matter from Right Kidney Pelvis, Percutaneous Endoscopic Approach","eventOrGroupId":76,"dateTime":"11/19/2022"},
    {"id":181,"type":"group","subject":"Canceled","message":"Supplement Lingula Bronchus with Autologous Tissue Substitute, Open Approach","eventOrGroupId":44,"dateTime":"12/5/2022"},
    {"id":182,"type":"group","subject":"Scheduled","message":"Introduction of Other Diagnostic Substance into Skin and Mucous Membranes, External Approach","eventOrGroupId":57,"dateTime":"5/3/2023"},
    {"id":183,"type":"event","subject":"Scheduled","message":"Revision of Nonautologous Tissue Substitute in Right Thumb Phalanx, Open Approach","eventOrGroupId":6,"dateTime":"7/23/2023"},
    {"id":184,"type":"group","subject":"Scheduled","message":"Removal of Autologous Tissue Substitute from Sacrococcygeal Joint, Open Approach","eventOrGroupId":26,"dateTime":"6/23/2023"},
    {"id":185,"type":"group","subject":"Canceled","message":"Introduction of Adhesion Barrier into Peritoneal Cavity, Open Approach","eventOrGroupId":75,"dateTime":"7/18/2023"},
    {"id":186,"type":"event","subject":"Scheduled","message":"Occlusion of Right Peroneal Artery with Intraluminal Device, Percutaneous Approach","eventOrGroupId":22,"dateTime":"2/4/2023"},
    {"id":187,"type":"event","subject":"Canceled","message":"Occlusion of Right Radial Artery, Percutaneous Endoscopic Approach","eventOrGroupId":63,"dateTime":"11/7/2022"},
    {"id":188,"type":"group","subject":"Scheduled","message":"Restriction of Left Face Vein with Extraluminal Device, Open Approach","eventOrGroupId":18,"dateTime":"8/26/2023"},
    {"id":189,"type":"group","subject":"Scheduled","message":"Reposition Left Eustachian Tube, Via Natural or Artificial Opening Endoscopic","eventOrGroupId":77,"dateTime":"2/15/2023"},
    {"id":190,"type":"group","subject":"Canceled","message":"Removal of Internal Fixation Device from Cervical Vertebra, External Approach","eventOrGroupId":93,"dateTime":"11/26/2022"},
    {"id":191,"type":"group","subject":"Scheduled","message":"Beam Radiation of Chest using Photons <1 MeV","eventOrGroupId":23,"dateTime":"1/7/2023"},
    {"id":192,"type":"event","subject":"Canceled","message":"Supplement Left Upper Eyelid with Autologous Tissue Substitute, External Approach","eventOrGroupId":69,"dateTime":"8/1/2023"},
    {"id":193,"type":"group","subject":"Scheduled","message":"Bypass Bladder to Colocutaneous with Synthetic Substitute, Open Approach","eventOrGroupId":31,"dateTime":"9/19/2023"},
    {"id":194,"type":"group","subject":"Scheduled","message":"Destruction of Right Upper Lobe Bronchus, Open Approach","eventOrGroupId":46,"dateTime":"9/10/2023"},
    {"id":195,"type":"group","subject":"Scheduled","message":"Transfer Left Upper Leg Subcutaneous Tissue and Fascia with Skin and Subcutaneous Tissue, Open Approach","eventOrGroupId":59,"dateTime":"8/3/2023"},
    {"id":196,"type":"group","subject":"Canceled","message":"Revision of Synthetic Substitute in Left Lower Extremity, Percutaneous Approach","eventOrGroupId":6,"dateTime":"8/12/2023"},
    {"id":197,"type":"event","subject":"Scheduled","message":"Replacement of Left Peroneal Artery with Autologous Tissue Substitute, Percutaneous Endoscopic Approach","eventOrGroupId":55,"dateTime":"7/20/2023"},
    {"id":198,"type":"group","subject":"Canceled","message":"Excision of Right Lower Lobe Bronchus, Percutaneous Endoscopic Approach, Diagnostic","eventOrGroupId":96,"dateTime":"12/12/2022"},
    {"id":199,"type":"event","subject":"Scheduled","message":"Extirpation of Matter from Left Humeral Shaft, Percutaneous Approach","eventOrGroupId":52,"dateTime":"9/6/2023"},
    {"id":200,"type":"event","subject":"Scheduled","message":"Motor Function Treatment of Musculoskeletal System - Upper Back / Upper Extremity using Assistive, Adaptive, Supportive or Protective Equipment","eventOrGroupId":89,"dateTime":"5/22/2023"}];
export {messages};
