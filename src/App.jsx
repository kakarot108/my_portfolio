import { useState } from "react";
import { Search, X, Tag, ExternalLink, Mail, Phone, MapPin, BookOpen, Award, Briefcase, GraduationCap, Globe } from "lucide-react";

const data = {
  experience: [
    {
      company: "Centre for Environment and Energy Development (CEEDIndia)",
      role: "Manager – Climate Tech",
      period: "Sep 2022 – Present",
      location: "India",
      achievements: [
        { text: "Analyzed desertification and land degradation in Jharkhand, assessing both environmental and socioeconomic impacts to inform sustainable land use policy.", tags: ["Remote Sensing", "Climate", "GIS", "Policy"] },
        { text: "Monitored forest degradation, forest cover dynamics, and forest fire risks using geospatial tools such as Google Earth Engine and QGIS.", tags: ["Forest", "Remote Sensing", "GIS"] },
        { text: "Managed GHG emissions data and led climate risk assessments for regional adaptation planning and resilience strategy design.", tags: ["Climate", "Data Science", "Policy"] },
        { text: "Applied big data analytics and Python/R-based models to environmental datasets to enhance the accuracy of climate vulnerability projections.", tags: ["Big Data", "Data Science", "Python", "R"] },
        { text: "Developed city-level climate action plans for Ranchi and Varanasi, influencing policy pathways for over 3 million residents.", tags: ["Climate", "Policy"] },
        { text: "Led GHG inventory development at Gram Panchayat level across multiple districts, supporting grassroots climate governance.", tags: ["Climate", "Policy"] },
        { text: "Conducted scenario analysis for Net Zero Pathways to support long-term decarbonization planning.", tags: ["Climate", "Data Science", "Policy"] },
      ]
    },
    {
      company: "Indian Society of Geomatics (ISG)",
      role: "Summer Training – Spatial Data Programming",
      period: "Jun 2022",
      location: "India",
      achievements: [
        { text: "Training with R, GEE & Python for Natural Resource Applications conducted by ISG-Ranchi chapter and Dept. of Geoinformatics, Central University of Jharkhand.", tags: ["R", "Python", "GEE"] },
      ]
    },
    {
      company: "Central University of Jharkhand",
      role: "Presenter",
      period: "Jul 2022",
      location: "Jharkhand, India",
      achievements: [
        { text: "Presented paper: 'Monitoring Tea Plantations during 2022 using multi-temporal satellite data in Assam, India'.", tags: ["Remote Sensing", "Research"] },
      ]
    },
    {
      company: "Department of CSE, NIT Warangal",
      role: "AI & ML Applications Conductor",
      period: "Apr 2022",
      location: "Warangal, India",
      achievements: [
        { text: "Conducted Artificial Intelligence and Machine Learning Applications workshop.", tags: ["AI", "Machine Learning"] },
      ]
    },
    {
      company: "International Workshop (Geo Vigyan)",
      role: "Talk Presenter",
      period: "Jun 2021",
      location: "India",
      achievements: [
        { text: "Presented on Morphometric Analysis for Geo-Hydrological and Active Tectonics Studies using ArcGIS & Excel.", tags: ["GIS", "Hydrology", "Research"] },
      ]
    },
  ],
  publications: [
    {
      title: "Monitoring tea plantations during 1990–2022 using multi-temporal satellite data in Assam (India)",
      journal: "Tropical Ecology",
      authors: "Bikash Ranjan Parida, Trinath Mahato, Surajit Ghosh",
      doi: "https://doi.org/10.1007/s42965-023-00304-x",
      date: "May 2023 · Vol. 65, pp. 387–398 (2024)",
      tags: ["Remote Sensing", "Vegetation", "Research"]
    },
    {
      title: "Assessing tea plantations biophysical and biochemical characteristics in Northeast India using satellite data",
      journal: "Environmental Monitoring and Assessment",
      authors: "Trinath Mahato, Bikash Ranjan Parida, Somnath Bar",
      doi: "https://doi.org/10.1007/s10661-024-12502-8",
      date: "Feb 2024 · Vol. 196, article 327 (2024)",
      tags: ["Remote Sensing", "Vegetation", "Research"]
    },
    {
      title: "Understanding the Drivers of Desertification and Land Degradation (DLD) over the Central Highlands of India",
      journal: "EGU General Assembly 2024, Vienna, Austria",
      authors: "Trinath Mahato, Manish Kumar",
      doi: "https://doi.org/10.5194/egusphere-egu24-20795",
      date: "Apr 2024 · EGU24-20795",
      tags: ["Climate", "Land Degradation", "Research"]
    },
  ],
  education: [
    { degree: "M.Sc. Geoinformatics", institution: "Central University of Jharkhand", period: "Dec 2020 – Aug 2022", gpa: "9.21/10", note: "Dissertation: Monitoring Tea Plantations 1990–2022 using Multi-Temporal Satellite Data, Assam" },
    { degree: "PG Diploma – Remote Sensing & GIS", institution: "Banaras Hindu University", period: "Jul 2019 – Aug 2020", gpa: "8.33/10", note: "Dissertation: Mangrove Vegetation Health & Land Surface Temperature – Sundarbans" },
    { degree: "BA (Hons.) – Geography", institution: "Kazi Nazrul University", period: "Jul 2016 – Jul 2019", gpa: "71.2/100", note: "" },
    { degree: "12th CBSE (Humanities)", institution: "Kendriya Vidyalaya Sangathan", period: "2015–2016", gpa: "71.2/100", note: "Geography, History, Economics, Hindi, English" },
    { degree: "10th CBSE", institution: "Kendriya Vidyalaya Sangathan", period: "2013–2014", gpa: "", note: "Mathematics, Science, Social Science, Hindi, English" },
  ],
  references: [
    {
      name: "Dr. Bikash Ranjan Parida",
      initial: "B",
      role: "Associate Professor",
      org: "Department of Geoinformatics, School of Natural Resource Management, Central University of Jharkhand, Ranchi-835205",
      phone: "+91-8130848255",
      email: ["bikashrp@gmail.com", "bikash.parida@cuj.ac.in"]
    },
    {
      name: "Dr. Manish Kumar",
      initial: "M",
      role: "Director (Research & Development)",
      org: "Centre for Environment and Energy Development, Ranchi, India",
      phone: "+91-7461934182",
      email: ["manishenvi@gmail.com"]
    },
    {
      name: "Dr. Somnath Bar, PhD",
      initial: "S",
      role: "Postdoctoral Researcher",
      org: "University of California, Irvine, United States",
      phone: "+91-9126138322",
      email: ["bar.somnath@yahoo.in", "somnatb@uci.edu"]
    },
  ],
  skills: ["ArcGIS","QGIS","ERDAS IMAGINE","ENVI","SNAP","SAGA GIS","Google Earth Engine","Remote Sensing","Python","R Programming","JavaScript","Machine Learning","Deep Learning","AI","Big Data Analytics","Data Science","Jupyter","GitHub","Carbon","Climate Change"],
  researchInterests: ["Forest Fire","Crop Fire","Biomass Carbon","LULC","Vegetation","Forest Degradation","Hydrology","Soil","Desertification","Land Degradation","Drought","Vegetation Health","Crop Mapping","Climate Policies","Climate Risk Assessment"],
  certifications: [
    "Remote Sensing Applications in Agricultural Water Management",
    "One-week QGIS Training Program (International Level)",
    "Geospatial Inputs for Enabling Master Plan Formulation",
    "Applications of Geoinformatics in Ecological Studies",
    "Remote Sensing Essentials",
    "Spatial Data Analysis in Google Earth Engine Python API",
  ],
  links: [
    { label: "Personal Website", url: "https://tinyurl.com/2vcj8dtp" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/tm112" },
    { label: "GitHub", url: "https://github.com/kakarot108" },
    { label: "Google Scholar", url: "https://scholar.google.com" },
    { label: "ResearchGate", url: "https://www.researchgate.net" },
  ]
};

const allTags = ["Remote Sensing","Climate","GIS","Forest","Data Science","Policy","Big Data","AI","Machine Learning","R","Python","GEE","Hydrology","Research","Vegetation","Land Degradation"];

const ACCENT = "#2E7D32";
const LIGHT = "#E8F5E9";
const SOFT = "#F1F8F1";

export default function App() {
  const [activeTab, setActiveTab] = useState("experience");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [detailItem, setDetailItem] = useState(null);

  const addTag = function(t) { if (!selected.includes(t)) setSelected(function(p) { return [...p, t]; }); };
  const removeTag = function(t) { setSelected(function(p) { return p.filter(function(x) { return x !== t; }); }); };

  const matchesFilter = function(tags, text) {
    if (!selected.length && !search) return true;
    var s = search.toLowerCase();
    var textMatch = s ? text.toLowerCase().includes(s) : true;
    var tagMatch = selected.length ? selected.some(function(sel) { return tags.includes(sel); }) : true;
    return (search ? textMatch : true) && (selected.length ? tagMatch : true);
  };

  var filteredExp = data.experience.map(function(exp) {
    return Object.assign({}, exp, { achievements: exp.achievements.filter(function(a) { return matchesFilter(a.tags, exp.company + " " + exp.role + " " + a.text); }) });
  }).filter(function(e) { return e.achievements.length; });

  var filteredPubs = data.publications.filter(function(p) { return matchesFilter(p.tags, p.title + p.journal + p.authors); });

  var tabs = [
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "publications", label: "Publications", icon: BookOpen },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills & Interests", icon: Award },
    { id: "references", label: "References", icon: Globe },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: SOFT, fontFamily: "system-ui, sans-serif" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)", color: "white", padding: "32px 24px 24px" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
            <div>
              <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0, letterSpacing: -0.5 }}>Trinath Mahato</h1>
              <p style={{ margin: "4px 0 12px", opacity: 0.9, fontSize: 15, fontWeight: 500 }}>Manager – Climate Tech</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, fontSize: 13, opacity: 0.85 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Phone size={13}/> +91 8906325142</span>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Mail size={13}/> mahatotrinath1@gmail.com</span>
                <span style={{ display: "flex", alignItems: "center", gap: 4 }}><MapPin size={13}/> Asansol, WB, India</span>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {data.links.map(function(l) {
                return (
                  <a key={l.label} href={l.url} target="_blank" rel="noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 4, background: "rgba(255,255,255,0.15)", color: "white", padding: "5px 10px", borderRadius: 6, fontSize: 12, textDecoration: "none" }}>
                    <Globe size={12}/> {l.label}
                  </a>
                );
              })}
            </div>
          </div>
          <p style={{ marginTop: 16, fontSize: 13, opacity: 0.85, lineHeight: 1.6, maxWidth: 760, background: "rgba(255,255,255,0.08)", padding: "10px 14px", borderRadius: 8, borderLeft: "3px solid rgba(255,255,255,0.4)" }}>
            Expert in Geo-informatics with extensive experience in forestry, land management, agricultural ecosystems, climate change, carbon potential, and green cover dynamics. Proficient in R, JavaScript, Python, and GIS tools including ArcMap, ERDAS IMAGINE, SNAP, and ENVI.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div style={{ background: "white", borderBottom: "1px solid #e0e0e0", padding: "12px 24px" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <Search size={16} color={ACCENT}/>
            <input value={search} onChange={function(e) { setSearch(e.target.value); }}
              placeholder="Search experience, publications..."
              style={{ flex: 1, border: "none", outline: "none", fontSize: 14, color: "#ffffff", backgroundColor: "transparent" }}/>
            {search && <button onClick={function() { setSearch(""); }} style={{ background: "none", border: "none", cursor: "pointer", color: "#999" }}><X size={14}/></button>}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {allTags.map(function(t) {
              var active = selected.includes(t);
              return (
                <button key={t} onClick={function() { active ? removeTag(t) : addTag(t); }}
                  style={{ fontSize: 11, padding: "3px 9px", borderRadius: 20, border: "1px solid " + (active ? ACCENT : "#ccc"), background: active ? LIGHT : "white", color: active ? ACCENT : "#666", cursor: "pointer", fontWeight: active ? 600 : 400, display: "flex", alignItems: "center", gap: 3 }}>
                  {active && <X size={10}/>} {t}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: "white", borderBottom: "1px solid #e0e0e0" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", display: "flex" }}>
          {tabs.map(function(tab) {
            var Icon = tab.icon;
            var isActive = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={function() { setActiveTab(tab.id); setDetailItem(null); }}
                style={{ padding: "12px 20px", border: "none", background: "none", cursor: "pointer", fontSize: 13, fontWeight: isActive ? 700 : 400, color: isActive ? ACCENT : "#666", borderBottom: isActive ? "2px solid " + ACCENT : "2px solid transparent", display: "flex", alignItems: "center", gap: 6 }}>
                <Icon size={14}/> {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "20px 24px", display: "flex", gap: 20 }}>
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* EXPERIENCE */}
          {activeTab === "experience" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {filteredExp.length === 0 && <p style={{ color: "#999", textAlign: "center", padding: 40 }}>No results found.</p>}
              {filteredExp.map(function(exp, ei) {
                return (
                  <div key={ei} style={{ background: "white", borderRadius: 10, border: "1px solid #e8f5e9", padding: 20, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4, flexWrap: "wrap", gap: 4 }}>
                      <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: ACCENT }}>{exp.company}</h3>
                      <span style={{ fontSize: 11, color: "#888", background: LIGHT, padding: "2px 8px", borderRadius: 10 }}>{exp.period}</span>
                    </div>
                    <p style={{ margin: "0 0 12px", fontSize: 13, color: "#555", fontStyle: "italic" }}>{exp.role} · {exp.location}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {exp.achievements.map(function(a, ai) {
                        var isSelected = detailItem && detailItem.data === a;
                        return (
                          <div key={ai} onClick={function() { setDetailItem({ type: "exp", data: a, context: exp }); }}
                            style={{ padding: "10px 12px", borderRadius: 7, border: "1px solid " + (isSelected ? ACCENT : "#e0e0e0"), background: isSelected ? LIGHT : "#fafafa", cursor: "pointer" }}>
                            <p style={{ margin: "0 0 6px", fontSize: 13, lineHeight: 1.55, color: "#333" }}>{a.text}</p>
                            <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                              {a.tags.map(function(t) { return <span key={t} style={{ fontSize: 10, background: LIGHT, color: ACCENT, padding: "1px 7px", borderRadius: 10, fontWeight: 600 }}>{t}</span>; })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* PUBLICATIONS */}
          {activeTab === "publications" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {filteredPubs.length === 0 && <p style={{ color: "#999", textAlign: "center", padding: 40 }}>No results found.</p>}
              {filteredPubs.map(function(pub, pi) {
                var isSelected = detailItem && detailItem.data === pub;
                return (
                  <div key={pi} onClick={function() { setDetailItem({ type: "pub", data: pub }); }}
                    style={{ background: isSelected ? LIGHT : "white", borderRadius: 10, border: "1px solid " + (isSelected ? ACCENT : "#e8f5e9"), padding: 18, cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                    <h3 style={{ margin: "0 0 6px", fontSize: 14, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.4 }}>{pub.title}</h3>
                    <p style={{ margin: "0 0 4px", fontSize: 12, color: ACCENT, fontWeight: 600 }}>{pub.journal}</p>
                    <p style={{ margin: "0 0 8px", fontSize: 12, color: "#666" }}>{pub.authors}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                      <div style={{ display: "flex", gap: 4 }}>
                        {pub.tags.map(function(t) { return <span key={t} style={{ fontSize: 10, background: LIGHT, color: ACCENT, padding: "1px 7px", borderRadius: 10, fontWeight: 600 }}>{t}</span>; })}
                      </div>
                      <span style={{ fontSize: 11, color: "#888" }}>{pub.date}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* EDUCATION */}
          {activeTab === "education" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {data.education.map(function(ed, i) {
                return (
                  <div key={i} style={{ background: "white", borderRadius: 10, border: "1px solid #e8f5e9", padding: 18, display: "flex", gap: 14, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: LIGHT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <GraduationCap size={18} color={ACCENT}/>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 4 }}>
                        <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#1a1a1a" }}>{ed.degree}</h3>
                        {ed.gpa && <span style={{ fontSize: 12, background: LIGHT, color: ACCENT, padding: "1px 8px", borderRadius: 10, fontWeight: 700 }}>GPA: {ed.gpa}</span>}
                      </div>
                      <p style={{ margin: "2px 0 0", fontSize: 13, color: ACCENT, fontWeight: 500 }}>{ed.institution}</p>
                      <p style={{ margin: "2px 0 0", fontSize: 11, color: "#888" }}>{ed.period}</p>
                      {ed.note && <p style={{ margin: "6px 0 0", fontSize: 12, color: "#555", fontStyle: "italic", lineHeight: 1.4 }}>{ed.note}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* SKILLS */}
          {activeTab === "skills" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "white", borderRadius: 10, border: "1px solid #e8f5e9", padding: 20 }}>
                <h3 style={{ margin: "0 0 12px", fontSize: 14, fontWeight: 700, color: ACCENT }}>Technical Skills</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {data.skills.map(function(s) { return <span key={s} style={{ fontSize: 12, background: LIGHT, color: ACCENT, padding: "4px 12px", borderRadius: 20, fontWeight: 500 }}>{s}</span>; })}
                </div>
              </div>
              <div style={{ background: "white", borderRadius: 10, border: "1px solid #e8f5e9", padding: 20 }}>
                <h3 style={{ margin: "0 0 12px", fontSize: 14, fontWeight: 700, color: ACCENT }}>Research Interests</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {data.researchInterests.map(function(r) { return <span key={r} style={{ fontSize: 12, background: "#f3f3f3", color: "#444", padding: "4px 12px", borderRadius: 20 }}>{r}</span>; })}
                </div>
              </div>
              <div style={{ background: "white", borderRadius: 10, border: "1px solid #e8f5e9", padding: 20 }}>
                <h3 style={{ margin: "0 0 12px", fontSize: 14, fontWeight: 700, color: ACCENT }}>Certifications</h3>
                {data.certifications.map(function(c, i) {
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT, marginTop: 5, flexShrink: 0 }}/>
                      <p style={{ margin: 0, fontSize: 13, color: "#444" }}>{c}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* REFERENCES */}
          {activeTab === "references" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {data.references.map(function(ref, i) {
                return (
                  <div key={i} style={{ background: "white", borderRadius: 10, border: "1px solid #e8f5e9", padding: 20, boxShadow: "0 1px 4px rgba(0,0,0,0.04)", display: "flex", gap: 16 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: LIGHT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 18, fontWeight: 700, color: ACCENT }}>
                      {ref.initial}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ margin: "0 0 2px", fontSize: 15, fontWeight: 700, color: "#1a1a1a" }}>{ref.name}</h3>
                      <p style={{ margin: "0 0 2px", fontSize: 13, color: ACCENT, fontWeight: 600 }}>{ref.role}</p>
                      <p style={{ margin: "0 0 10px", fontSize: 12, color: "#666", lineHeight: 1.4 }}>{ref.org}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                        <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#444" }}>
                          <Phone size={12} color={ACCENT}/> {ref.phone}
                        </span>
                        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                          {ref.email.map(function(e) {
                            return (
                              <a key={e} href={"mailto:" + e} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: ACCENT, textDecoration: "none" }}>
                                <Mail size={12}/> {e}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>

        {/* Detail Panel */}
        {detailItem && (
          <div style={{ width: 280, flexShrink: 0 }}>
            <div style={{ background: "white", borderRadius: 10, border: "2px solid " + ACCENT, padding: 18, position: "sticky", top: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, paddingBottom: 10, borderBottom: "1px solid " + LIGHT }}>
                <h4 style={{ margin: 0, fontSize: 13, fontWeight: 700, color: ACCENT }}>Details</h4>
                <button onClick={function() { setDetailItem(null); }} style={{ background: "none", border: "none", cursor: "pointer", color: "#999" }}><X size={14}/></button>
              </div>
              {detailItem.type === "exp" && (
                <div>
                  <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888", fontWeight: 600 }}>{detailItem.context.company}</p>
                  <p style={{ margin: "0 0 12px", fontSize: 13, lineHeight: 1.6, color: "#333" }}>{detailItem.data.text}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {detailItem.data.tags.map(function(t) { return <span key={t} style={{ fontSize: 11, background: LIGHT, color: ACCENT, padding: "2px 8px", borderRadius: 10, fontWeight: 600 }}>{t}</span>; })}
                  </div>
                </div>
              )}
              {detailItem.type === "pub" && (
                <div>
                  <p style={{ margin: "0 0 6px", fontSize: 13, fontWeight: 700, lineHeight: 1.4, color: "#1a1a1a" }}>{detailItem.data.title}</p>
                  <p style={{ margin: "0 0 4px", fontSize: 12, color: ACCENT, fontWeight: 600 }}>{detailItem.data.journal}</p>
                  <p style={{ margin: "0 0 8px", fontSize: 11, color: "#666" }}>{detailItem.data.authors}</p>
                  <p style={{ margin: "0 0 12px", fontSize: 11, color: "#888" }}>{detailItem.data.date}</p>
                  <a href={detailItem.data.doi} target="_blank" rel="noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12, color: ACCENT, fontWeight: 600, textDecoration: "none", background: LIGHT, padding: "5px 10px", borderRadius: 6 }}>
                    <ExternalLink size={12}/> View Publication
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}